import React, { useRef, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as S from './styled';
import TagBox from '../TagBox';
import 'quill/dist/quill.bubble.css';
import useQuill from 'utils/hooks/useQuill';
import { postAction } from 'redux/post';
import { URL_GROUP, getPostQuery } from 'configs/links/urls';
const { modifyThunk } = postAction;

function PostModifyForm({ data }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { control, register, setValue, getValues, handleSubmit, watch } = useForm({
    defaultValues: { title: data?.title || '', body: data?.body || '', tags: data?.tags || [] },
  });
  const tags = watch('tags');
  const quillElement = useRef(null);
  const { quill } = useQuill(quillElement);

  const onSubmit = useCallback(
    async (formData) => {
      try {
        const { title, body, tags } = formData;
        const response = await dispatch(modifyThunk({ title, body, tags, id: data?.id }));
        const { id } = response;
        history.push(`${URL_GROUP.POST}/${getPostQuery({ id })}`);
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, history],
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
      quill.root.innerHTML = getValues('body');
    }
  }, [quill, getValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          포스트 수정
        </S.StyledButton>
        <S.StyledButton onClick={onCancel}>취소</S.StyledButton>
      </S.ButtonWrapper>
    </form>
  );
}

export default PostModifyForm;
