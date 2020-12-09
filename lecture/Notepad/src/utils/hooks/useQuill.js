import { useState, useEffect } from 'react';
import Quill from 'quill';

function useQuill(quillElement) {
  const [quill, setQuill] = useState();

  useEffect(() => {
    const quill = quillElement.current
      ? new Quill(quillElement.current, {
          theme: 'bubble',
          placeholder: '내용을 작성하세요...',
          modules: {
            toolbar: [
              [{ header: '1' }, { header: '2' }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['blockquote', 'code-block', 'link', 'image'],
            ],
          },
        })
      : null;
    setQuill(quill);
  }, [quillElement]);

  return { quill };
}
export default useQuill;
