import React from 'react'
import './homeBanner.css'
import homeBannerItemProduct from '../../../homeProduct.json'

const HomeBanner = () => {
    return (
        <div className="homeBanner">
            <img src='https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg' className="homeBannerimg" alt="" />
            <div className="grayBackgroundHomeBanner"></div>

            <div className="homeBannerItemDiv">

                {
                    homeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((it, ind) => {
                                            return (
                                                <div className="imgBannerHomeDiv">
                                                    <img className='imgBannerHomeDivImg' src={it} alt="" />
                                                    <div className="imgBannerImgName">Windows Laptop</div>
                                                </div>



                                            )
                                        })
                                    }



                                </div>

                                <div className="seeMoreHomeBanner">See More</div>
                            </div>



                        )
                    })
                }


                {/* <div className="homeBannerItemDivCard">
                    <div className="homeBannerItemDivCardTitle">Title</div>
                    <div className="imgHomeBannerItemDivCard">


                        <div className="imgBannerHomeDiv">
                            <img className='imgBannerHomeDivImg' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                            <div className="imgBannerImgName">Windows Laptop</div>
                        </div>
                        <div className="imgBannerHomeDiv">
                            <img className='imgBannerHomeDivImg' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                            <div className="imgBannerImgName">Windows Laptop</div>
                        </div>
                        <div className="imgBannerHomeDiv">
                            <img className='imgBannerHomeDivImg' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                            <div className="imgBannerImgName">Windows Laptop</div>
                        </div>
                        <div className="imgBannerHomeDiv">
                            <img className='imgBannerHomeDivImg' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                            <div className="imgBannerImgName">Windows Laptop</div>
                        </div>
                    </div>

                    <div className="seeMoreHomeBanner">See More</div>
                </div> */}
            </div>

        </div>
    )
}

export default HomeBanner;