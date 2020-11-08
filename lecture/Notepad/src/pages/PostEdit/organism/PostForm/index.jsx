import React, { useRef, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as S from './styled';
import TagBox from '../TagBox';
import 'quill/dist/quill.bubble.css';
import useQuill from 'utils/hooks/useQuill';
import { postSelector, postAction } from 'redux/post';
const { writeFetchInit, write } = postAction;

function EditorSection() {
  const dispatch = useDispatch();
  const { done } = useSelector(postSelector.writeFetch);
  const { control, register, setValue, handleSubmit, watch } = useForm({
    defaultValues: { title: '', body: '', tags: [] },
  });
  const tags = watch('tags');
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const { quill } = useQuill(quillElement);
  const history = useHistory();

  const onSubmit = useCallback(
    (data) => {
      const { title, body, tags } = data;
      dispatch(write({ title, body, tags }));
    },
    [dispatch],
  );

  const onCancel = () => {
    history.goBack();
  };

  // register 등록
  useEffect(() => {
    register({ name: 'body' });
    register({ name: 'tags' });
  }, [register]);

  // quill 리스너 등록
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (_delta, _oldDelta, source) => {
        if (source === 'user') {
          setValue('body', quill.root.innerHTML);
        }
      });
    }
  }, [quill, setValue]);

  // submit redirect post load page
  // wirte FetchData reset for init
  useEffect(() => {
    if (done) {
      const { id, user } = done;
      history.push(`/post/@${user.username}/${id}`);
      dispatch(writeFetchInit());
    }
  }, [dispatch, history, done]);

  return (
    <form id="editForm" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="title" as={S.TitleInput} control={control} placeholder="제목을 입력하세요" />
      <S.QuillWrapper>
        <div ref={quillElement} />
      </S.QuillWrapper>
      <TagBox
        tags={tags}
        handleAddTag={(tagName) => {
          setValue('tags', tags.concat(tagName));
        }}
        handleRemoveTag={(index) => {
          const nextTags = [...tags.slice(0, index), ...tags.slice(index + 1, tags.length)];
          setValue('tags', nextTags);
        }}
      />
      <S.ButtonWrapper>
        <S.StyledButton cyan type="submit">
          포스트 등록
        </S.StyledButton>
        <S.StyledButton onClick={onCancel}>취소</S.StyledButton>
      </S.ButtonWrapper>
    </form>
  );
}

export default EditorSection;
