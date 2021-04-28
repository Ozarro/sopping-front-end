import React, {Fragment} from 'react';

/**
 * product Quick View component
 * @param data
 * @param onQuickViewCloseClick
 * @returns {*}
 * @constructor
 */
function QuickView({data, onQuickViewCloseClick}) {

    return (
        <Fragment>
            <div className="quick-view-single-product activve-quick-view-single-product">
                <div className="view-single-product-inner clearfix">
                    <button className="btn quick-view-single-product-close-btn" onClick={onQuickViewCloseClick}><i
                        className="pe-7s-close-circle"/></button>
                    <div className="img-holder">
                        <img loading="lazy" src={process.env.PUBLIC_URL + data.mainImg} alt=""/>
                    </div>
                    <div className="product-details">
                        <h4>Short Sleeve</h4>
                        <div className="price">
                            <span className="current">{data.Symbol}{data.price}</span>
                            {parseInt(data.price) < parseInt(data.oldPrice) ?
                                <span className="old">{data.Symbol}{data.oldPrice}</span> : ''
                            }
                        </div>
                        <div className="rating">
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star-social-favorite-middle-full"/>
                            <span>({data.reviewCounts} Customer review)</span>
                        </div>
                        <p>{data.content}</p>
                        <div className="product-option">
                            <form className="form">
                                <div className="product-row">
                                    <div>
                                        <input className="product-count" type="text" defaultValue={1}
                                               name="product-count-3"/>
                                    </div>
                                    <div>
                                        <button type="submit" onClick={onQuickViewCloseClick}>Add to cart</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="thb-product-meta-before">
                            <div className="add-to-wishlist">
                                <a href="#" className="add_to_wishlist">
                                    <i className="pe-7s-like"/>
                                    <span>Add To Wishlist</span>
                                </a>
                            </div>
                            <div className="product_meta">
                                <span className="sku_wrapper">SKU: <span className="sku">{data.SKU}</span></span>
                                <span className="posted_in">
                                    Categories:
                                    {
                                        data.Categories.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{item.name} {data.Categories.length - 1 === index ? '' : ','}</a>
                                        )
                                    }
                                </span>
                                <span className="tagged_as">
                                    Tags:
                                    {
                                        data.Tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{item.name} {data.Tags.length - 1 === index ? '' : ','}</a>
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default QuickView;