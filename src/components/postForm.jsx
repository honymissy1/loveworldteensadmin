import '../assets/styles/post.css'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import {Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const PostForm = () =>{
    const [content, setContent] = useState('');
    
      const props = {
        action: '#',
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    

    console.log(content);
    return (
        <>
          <ReactQuill
                style={{marginBottom: '20px'}}
                value={content}
                onChange={setContent}
                theme="snow"
                placeholder="Type article..."

                modules={{ 
                toolbar: [['bold', 'italic', 'underline', 'strike'],  ['link', 'image',]]
                }}
             />


    <div style={{border: '1px solid #ddd', padding: '10px'}}>
        <h2 style={{margin: '10px 0px'}}>Post Content</h2>

         <form action="#">
          <label htmlFor="title">Title</label>
          <Input  />
          <Input placeholder='Details' style={{height: '100px', marginTop: '10px'}} />
          <Upload {...props}>
            <Button icon={<UploadOutlined />} style={{margin: '10px 0px'}}>Select File</Button>
          </Upload>

          <Button type="primary">Post</Button>
         </form>
    </div>
        </>
    )
}

export default PostForm