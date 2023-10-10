export default function Post(){
    return(
        <div className="text-[white] mt-10 my-5 lg:grid grid-cols-2 gap-20">
        <img className="w-full" src="https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg" alt="img"/>

        <div>
        <h2 className="text-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget turpis elit.</h2>
        
        <p className="mb-5 mt-2 text-[green] ">
            <a href="" className="mr-5">Lorem Ipsum</a> 
            <time className="text-[grey]">2023-01-01</time>
        </p>

        <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi a blandit maximus, enim arcu semper lacus, ut rutrum quam diam et est. Donec accumsan ultrices massa sit amet consequat. Praesent sagittis vulputate velit, sed euismod erat euismod et. Vivamus varius enim non felis maximus tempus. Vestibulum sagittis iaculis felis sit amet finibus. Fusce quis tellus vitae dolor molestie pharetra sit amet quis enim. Sed vulputate diam non felis pulvinar, ornare sollicitudin enim ultrices. Duis eleifend at nibh nec commodo. Fusce vel purus in magna consectetur auctor. Aenean risus ex, mollis nec tortor sit amet, consequat sagittis dui. Mauris sollicitudin dolor et odio mollis, at gravida nisl maximus.</p>
    </div>
    </div>
    )
}