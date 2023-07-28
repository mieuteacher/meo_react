import { useState, useEffect, useRef } from 'react';
import './app.scss'
import axios from 'axios';
import { randomId } from '@mieuteacher/meomeojs';
import OptionNavigate from './components/OptionNavigate'
function App() {
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([
    // {
    //     name: String,
    //     price: Number,
    //     stock: Number,
    //     pictures: [
    //       {url: String},
    //       {url: String}
    //     ]
    // }
  ]);
  const urlPreviewRef = useRef();
  useEffect(() => {
    axios.get("http://localhost:3001/apis/v1/categories?status=true")
      .then(res => {
        setCategories(res.data.data)
      })
  }, [])
  return (
    <div className="App">
      <h1>Demo Thêm Sản Phẩm</h1>
      <form onSubmit={(eventForm) => {
        // khử hành vi mặc định của form
        eventForm.preventDefault();

        // khai báo biến product
        let newProduct = {
          category_id: Number(eventForm.target.category_id.value),
          name: eventForm.target.name.value,
          des: eventForm.target.des.value,
          avatar: eventForm.target.avatar.files[0]
        }

        console.log("newProduct", newProduct)

      }} className="product_form">
        <div className='product_form_category'>
          Danh Mục
          <select name='category_id'>
            {
              categories.map((category, index) => (
                <option key={randomId()} value={category.id}>{category.title}</option>
              ))
            }
          </select>
        </div>
        <div className='product_form_name'>
          Product Name
          <input name='name' type="text" />
        </div>
        <div className='product_form_des'>
          Product Des
          <textarea name="des" id="" cols="30" rows="10"></textarea>
        </div>
        <div className='product_form_avatar'>
          Product Avatar
          <input name="avatar" onChange={(event) => {
            if (event.target.files.length == 0) {
              console.log("Chưa chọn hình!")
            } else {
              //console.log("event", event.target.files)
              let blodUrl = URL.createObjectURL(event.target.files[0])
              //console.log("urlPreviewRef", urlPreviewRef.current)
              urlPreviewRef.current.src = blodUrl;
              /// document.getElementById('testimg').src = blodUrl;
            }
          }} type="file" />
          <img ref={urlPreviewRef} id='testimg' style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" />
        </div>
        <div className='options'>
          {/* Điều Hướng */}
          <OptionNavigate/>
          {/* Nội Dung Options */}

        </div>
        <div>
          <button type='submit'>Tạo Mới</button>
        </div>
      </form>
    </div>
  );
}

export default App;
