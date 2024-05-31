/** 

 @author xinyou <loveyou0410gx@gmail.com>

*/

import Link from "next/link";
import { Navbar, 
        NavbarBrand, 
        NavbarCollapse, 
        NavbarLink, 
        NavbarToggle,
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup,
        Carousel,
        Card,
        Button,
        DarkThemeToggle
 } from "flowbite-react";

 import CustomCard from '@/app/components/Card';


export default function Home() {

  const items = [
    {
      "ScenicSpotID": "C1_376490000A_000001",
      "ScenicSpotName": "雲林布袋戲館",
      "DescriptionDetail": "戲裡乾坤，彈指話說千古事前身質樸雅致的虎尾郡役所，於2001年正式公告為古蹟，並化身在地文化氣息濃厚的布袋戲館。館內詳盡介紹布袋戲各派別、角色、文化故事和歷史沿革，來自各國的經典戲偶角色；蘊藏著古早記憶的皮影戲偶及金碧輝煌的戲臺，以及備受好評的互動式表演，皆適合與長輩同遊，感受布袋戲演藝的時光隧道！一提到布袋戲這台灣之光，就不得不提到布袋戲的故鄉雲林虎尾鎮，而位於虎尾的雲林布袋戲館，就跟大家來特別介紹一下吧。 雲林布袋戲館展示布袋戲的發展史和靜態戲偶陳列，讓民眾能前來了解傳統布袋戲的發展，並保存傳統布袋戲，不讓文物文化流失。布袋戲館的成立，讓大家可以有地方吸收布袋戲文化，了解布袋戲過去的歷史，進而認同傳統藝術布袋戲。注意事項：1.全面禁煙、設攤兜售2.除導盲犬及功能犬，攜伴其他動物請置放可攜容器內3.12歲以下兒童需由成人帶領4.攝影勿開閃光燈5.展示品請勿觸摸及破壞公物6.學術單位或媒體需要拍攝者請於一周前申請7.展廳內勿飲食",
      "Description": "戲裡乾坤，彈指話說千古事前身質樸雅致的虎尾郡役所，於2001年正式公告為古蹟，並化身在地文化氣息濃厚的布袋戲館。館內詳盡介紹布袋戲各派別、角色、文化故事和歷史沿革，來自各國的經典戲偶角色；蘊藏著古早記憶的皮影戲偶及金碧輝煌的戲臺，以及備受好評的互動式表演，皆適合與長輩同遊，感受布袋戲演藝的時光隧道！",
      "Phone": "886-5-6313080",
      "Address": "雲林縣虎尾鎮林森路一段498號",
      "ZipCode": "632",
      "TravelInfo": "大眾運輸：台西客運虎尾站，下車步行1分鐘。開車：林森路一段與公安路交接口右邊-雲林布袋戲館位置：館於虎尾郵局斜對面、土地銀行旁",
      "OpenTime": "10:00-18:00一二公休，其餘依臉書公告而定",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220223023134430252UEWYU.jpg",
        "PictureDescription1": "雲林布袋戲館",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2202230231344458532J571.jpg",
        "PictureDescription2": "雲林布袋戲館"
      },
      "MapUrl": "https://goo.gl/maps/bLNjsdS1nnaMrw3bA",
      "Position": {
        "PositionLon": 120.43340301513672,
        "PositionLat": 23.709280014038086,
        "GeoHash": "wsjwus0ut"
      },
      "Class1": "文化類",
      "Class2": "古蹟類",
      "Class3": "藝術類",
      "ParkingInfo": "館後方有公安路收費停車場(限自小客車)。此為資訊揭露，依停車場之規定為主。  為避免參觀人車造成館前交通要道壅塞，大客車(九人座以上遊覽車輛)，請在入口放人後，車輛儘速移走。",
      "ParkingPosition": {},
      "TicketInfo": "免費自行參觀  自費項目：DIY課程酌收材料費、劇團售票演出、預約導覽",
      "Keyword": "雲林布袋戲館,虎尾",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000002",
      "ScenicSpotName": "北港朝天宮",
      "DescriptionDetail": "台灣媽祖總本山北港朝天宮主祀媽祖，俗呼北有關渡媽，南有北港媽。廟為國定古蹟，每年農曆三月十九、二十日，國家重要民俗-「北港迓媽祖」熱鬧，成就了北港眾多的工藝匠師以及百年藝陣。位於雲林北港的北港朝天宮，舊稱「天妃廟」或「天后宮」，是一座歷史悠久莊嚴的媽祖廟，建立於1694年至今已經300多年的歷史，也是國定第二級古蹟。 宗教廟宇是人民重要的精神寄託，每年農曆三月十九、二十日是北港地區更熱鬧的日子「北港朝天宮迎媽祖」的繞境活動，讓全民「瘋媽祖」。繞境的範圍並不會前往到其他縣市，卻有著許多專屬於北港朝天宮的特色。",
      "Description": "台灣媽祖總本山北港朝天宮主祀媽祖，俗呼北有關渡媽，南有北港媽。廟為國定古蹟，每年農曆三月十九、二十日，國家重要民俗-「北港迓媽祖」熱鬧，成就了北港眾多的工藝匠師以及百年藝陣。",
      "Phone": "886-5-7832055",
      "Address": "雲林縣北港鎮中山路178號",
      "ZipCode": "651",
      "TravelInfo": "國道南下：走國道3號從古坑系統國道1號從雲林系統，接78號快速道路，往台西方向從虎尾交流下走145縣道，若從元長交流道下走台19線，從東勢交流道下走153號縣道再接155縣道。 國道北上：國道1號下嘉義交流道(北港/新港)，直行縣道159線(太保市北港路;新港鄉中山路)，左轉縣道164線(福德路)，右轉台19線過北港大橋 ，直行雲林北港鎮義民路 ，右轉中正路或民主路。",
      "OpenTime": "05:00-00:00(特殊情況依廟方時間為主)",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220209053049151053QRMQF.jpg",
        "PictureDescription1": "北港朝天宮",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220613114737271145CW3UP.jpg",
        "PictureDescription2": "北港朝天宮",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206131148518026821JGU2.jpg",
        "PictureDescription3": "北港朝天宮"
      },
      "MapUrl": "https://goo.gl/aCQLBm",
      "Position": {
        "PositionLon": 120.30480194091797,
        "PositionLat": 23.568090438842773,
        "GeoHash": "wsjw1d7q1"
      },
      "Class3": "遊憩類",
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "北港朝天宮",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000003",
      "ScenicSpotName": "成龍濕地",
      "DescriptionDetail": "黑面琵鷺天堂和絕美夕照成龍溼地原為可耕地，因為受到地層下陷、海水倒灌影響而不得不廢耕。但也因生態演化豐富，常吸引黑面琵鷺等等的罕見鳥類進駐。經過藝術家的設計裝置藝術「水核心」後，此地的絕美夕照已成為口湖名勝，必須一訪。成龍濕地位於雲林口湖鄉，是一般保護區，被列為國家重要濕地之一，目前已由荒廢的田地演化為生物群集的濕地，每年都有成千上萬的候鳥飛來駐足棲息，有瀕臨絕種的黑面琵鷺，還有小燕鷗、紅隼等等，更有豐富的魚類及螃蟹等，儼然是地方重要觀光資源。",
      "Description": "黑面琵鷺天堂和絕美夕照成龍溼地原為可耕地，因為受到地層下陷、海水倒灌影響而不得不廢耕。但也因生態演化豐富，常吸引黑面琵鷺等等的罕見鳥類進駐。經過藝術家的設計裝置藝術「水核心」後，此地的絕美夕照已成為口湖名勝，必須一訪。",
      "Phone": "886-5-7970213",
      "Address": "口湖鄉成龍村(成龍社區發展協會)",
      "ZipCode": "653",
      "TravelInfo": "斗南交流道下往北港方向行駛，於164縣道往口湖近入金湖走台十七線成龍二橋旁。",
      "OpenTime": "24HR",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/230116023954870096V2958.jpg",
        "PictureDescription1": "成龍濕地",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2301160239549169729JJH8.jpg",
        "PictureDescription2": "成龍濕地",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/230116023954932601VAHBE.jpeg",
        "PictureDescription3": "成龍濕地"
      },
      "MapUrl": "https://goo.gl/niV37K",
      "Position": {
        "PositionLon": 120.16419982910156,
        "PositionLat": 23.55491065979004,
        "GeoHash": "wsjqn2hck"
      },
      "Class1": "自然風景類",
      "ParkingInfo": "安龍宮前廣場或路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀，需要預約導覽服務請來電洽詢",
      "Keyword": "濕地,黑面琵鷺,小燕鷗,黑嘴鷗,紅隼,彩鷸,紅尾伯勞,燕鴴",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    }
  ];

  return (
    <>
    <div className="bg-cyan-800">
     <div className="container mx-auto">

       <Navbar fluid className="bg-cyan-800">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">小祐</span>
        </NavbarBrand>
        <NavbarToggle />
       <NavbarCollapse>
          <NavbarLink href="#" className="text-white " >
            <spen className="px-4 py-2 hover:text-yellow-500  hover:border-yellow-500  hover:border-b-2" >交通</spen>
          </NavbarLink>

          <NavbarLink as={Link} href="#" className="text-white ">
            <spen className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2 " >景點</spen>
          </NavbarLink>

          <NavbarLink href="#"className="text-white ">
          <spen className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500  hover:border-b-2" >關於我們</spen>
          </NavbarLink>

        </NavbarCollapse>
        <DarkThemeToggle/>
       </Navbar>
       </div>
       </div> 
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="\banner\banner-1.jpg" alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869" />
        <img src="\banner\banner-2.jpg" alt="由 United States. Office of the Chief of Naval Operations - Civil Affairs Handbook Taiwan (Formosa) Taina Province (via HathiTrust, 公有領域, https://commons.wikimedia.org/w/index.php?curid=23751387" />
        <img src="\banner\banner-3.jpg" alt="由 禮密臣（James Wheeler Davidson; 1872-1933） - Library at University of Calgary - Digital Collectionshttps://digitalcollections.ucalgary.ca/asset-management/2R3BF1SJZIAK3?WS=SearchResults, 公有領域, https://commons.wikimedia.org/w/index.php?curid=71073715" />
        <img src="\banner\banner-4.jpg" alt="由 abc759kimo - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=94599070" />
        <img src="\banner\banner-5.jpg" alt="由 中文維基百科的Mnb - 本檔案是由Shizhao使用CommonsHelper，從zh.wikipedia轉移到維基共享資源。, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=9956033" />
      </Carousel>
    </div>
    <div className="bg-white py-16">
     <div className="container mx-auto grid grid-cols-4 gap-4">
     { items.map( items =>



    <Card
      className="max-w-sm"
      imgAlt={items.Picture.PictureDescription1}
      imgSrc={items.Picture.PictureUrl1}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {items.ScenicSpotName}
      </h5>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        {items.DescriptionDetail}
      </p>

      <Button>
        
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
    
      </Button>
    
    </Card>
        )
      }
  

    </div>

    <div class="container mx-auto">
     <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-black">
      {
        items.map( item =>
          <CustomCard item={item}/>
        )
      }
     </div>
    </div>
    </div> 

    <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
   </>
  );
}