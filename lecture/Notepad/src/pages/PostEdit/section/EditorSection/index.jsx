import React, { useRef, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import 'quill/dist/quill.bubble.css';
import TagBox from '../../organism/TagBox';
import useQuill from 'utils/hooks/useQuill';
import { postSelector, postAction } from 'redux/post/slice';
const { write, changeFormState } = postAction;

function EditorSection() {
  const dispatch = useDispatch();
  const { tags = [] } = useSelector(postSelector.form);
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: { title: '', body: '' },
  });
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const { quill } = useQuill(quillElement);
  const history = useHistory();

  const onSubmit = useCallback(
    (data) => {
      const { title, body } = data;
      dispatch(changeFormState({ title, body, tags }));
      dispatch(write({ title, body, tags }));
    },
    [dispatch, tags],
  );

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    register({ name: 'body' });
  }, [register]);

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        if (source === 'user') {
          setValue('body', quill.root.innerHTML);
        }
      });
    }
  }, [quill]);

  return (
    <>
      <form id="editForm" onSubmit={handleSubmit(onSubmit)}>
        <S.TitleInput name="title" placeholder="제목을 입력하세요" ref={register} />
        <S.QuillWrapper>
          <div ref={quillElement} />
        </S.QuillWrapper>
      </form>
      <TagBox />
      <S.ButtonWrapper>
        <S.StyledButton cyan type="submit" form="editForm">
          포스트 등록
        </S.StyledButton>
        <S.StyledButton onClick={onCancel}>취소</S.StyledButton>
      </S.ButtonWrapper>
    </>
  );
}

export default EditorSection;
