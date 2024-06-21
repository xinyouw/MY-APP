/** 

 @author xinyou <loveyou0410gx@gmail.com>

*/


export default function CustomCard({item}){
    return(
        <div class="border">
            <dev>
            {item.Picture.PictureUrl1}
            {item.ScenicSpotName}
            </dev>
        </div>
    )
}