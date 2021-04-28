import React, {Fragment} from 'react';

/**
 * Coupon component
 * @returns {*}
 * @constructor
 */
function Coupon() {

    /**
     * check this function
     */
    const onClickSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <tr>
                <td colSpan={6} className="actions">
                    <div className="coupon">
                        <label htmlFor="coupon_code">Coupon:</label>
                        <input type="text" name="coupon_code" className="input-text"
                               id="coupon_code" defaultValue placeholder="Coupon code"/>
                        <input onClick={onClickSubmit} type="submit" className="button" name="apply_coupon"
                               defaultValue="Apply Coupon"/>
                    </div>
                    <input onClick={onClickSubmit} type="submit" className="button" name="update_cart"
                           defaultValue="Update Cart"/>
                    <input type="hidden" id="_wpnonce" name="_wpnonce"
                           defaultValue="918724a9c2"/>
                    <input type="hidden" name="_wp_http_referer"
                           defaultValue="/wp/?page_id=5"/>
                </td>
            </tr>
        </Fragment>
    );
}

export default Coupon;