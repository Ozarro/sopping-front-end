import React, {Fragment} from 'react';

/**
 * nonscript show message for browser are not support JavaScript
 * @returns {*}
 * @constructor
 */
function NoscriptSnippet() {

    return (
        <Fragment>
            <noscript>
                Since your browser does not support JavaScript, or it is disabled,
                please ensure you click the &lt;em&gt;Update
                Totals&lt;/em&gt; button before placing your order. You may be
                charged more than the amount stated above if you fail to do so.
                &lt;br/&gt;
                &lt;input type="submit" class="button alt"
                name="woocommerce_checkout_update_totals" value="Update totals"
                /&gt;
            </noscript>
        </Fragment>
    );
}

export default NoscriptSnippet;