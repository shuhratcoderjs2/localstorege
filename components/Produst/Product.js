class Product {
    
    render(){
        let htmlMenu = ''
        menu.forEach(({id, name , img, price}) => {
            
            htmlMenu +=`
                <li class='card col-4 p-2'> 
                    <img src=${img} class='card-img-top' >
                    <div class='card-body'>
                    <p>Ovqat ${name} </p>

                    <p>Narxi ${price} </p>
                    </div>
                    <button href="#" id="${id}" class="add btn btn-primary">Korzikaga qo'shish</button>
                </li>
            `
        });
        let html = `<ul class='row g-5 m-4'> ${htmlMenu} </ul>`
        $product.innerHTML = html
    }
}

const product = new Product();

product.render()

let $korzinka = document.querySelector('.korzinka')
let $removeall = document.querySelector('.removeall')

let korzinka = ()=> !!localStorage.getItem('id') ? localStorage.getItem('id').split(',').length: 0;
let innerKorzinka = ()=>  $korzinka.innerHTML = korzinka()
let removeAll = () =>{
    localStorage.removeItem(localStorage.key(0))

    // innerKorzinka()
}
$removeall.onclick = ()=>{
    removeAll()
    korzinka()
    innerKorzinka()
}
innerKorzinka()
let $add = document.querySelectorAll(".add")

let h = (()=>{
    let idArr =!!localStorage.getItem('id') ? localStorage.getItem('id').split(',') : [];
    return async function  (){
        await idArr.push(this.id)
        await localStorage.setItem('id', idArr)
        await innerKorzinka()
    }
})()


$add.forEach(item=>{
    
    item.addEventListener('click', h)
})

