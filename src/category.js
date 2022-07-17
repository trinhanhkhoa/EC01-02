import React from "react";

class Category extends React.Component{
    render(){
        return (
            <ul class="nav category">
                <li class="nav-item">
                    <a class="nav-link" href="">Phụ kiện thay thế, sữa chữa</a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Phụ kiện trang trí</a> 
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="">Phụ kiện thêm</a> 
                </li>
                
            </ul>
        );
        
    }
}

export default Category;