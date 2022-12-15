
export function footerComp() {
    return `
    <hr>
    <div id="firstLevel">
        <div>
            <ul>
                <li class="one">Know Us</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Press Coverage</li>
                <li>Careers</li>
                <li>Business Partnership</li>
                <li>Become a Health Partner</li>
                <li>Corporate Governance</li>
            </ul>
        </div>
        <div>
            <ul>
                <li class="one">Our Policies</li>
                <li>Privacy Policy</li>
                <li> Terms and Conditions</li>
                <li>Editorial Policy</li>
                <li> Return Policy</li>
                <li> IP Policy</li>
                <li>Grievance Redressal Policy</li>
                <li> Fake Jobs and Fraud Disclaimer</li>
            </ul>
        </div>
        <div>
            <h3></h3>
            <ul>
                <li class="one">Our Services</li>
                <li>Order Medicines</li>
                <li>Book Lab Tests</li>
                <li>Consult a Doctor</li>
                <li>Ayurveda Articles</li>
                <li>Hindi Articles</li>
                <li>Care Plan</li>
            </ul>
        </div>
        <div id="appstore">
            <ul>
                <li class="one">Download App</li>
                <li>
                    <img class="store" src="https://vayupay.com/wp-content/uploads/download-playstore-btn.png"
                        alt="google Play">
                </li>
                <li>
                    <img class="storeapple"
                        src="data:image/png;base64,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"
                        alt="Apple app store">
                </li>
            </ul>



        </div>
    </div>
    <hr>
    <div id="SecondLevel">

        <div>
            <img class="certi" src="https://static.legitscript.com/seals/729605.png" alt="">
            <img class="certi" src="https://onemg.gumlet.io/URS_ebgmxc.png">
        </div>
        <div>
            <h3>India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform</h3>
        </div>
    </div>
    <hr>
    <div id="thirdLevel">
        <p>© 2022 Tata 1mg. All rights reserved. In compliance with Drugs and Cosmetics Act, 1940 and Drugs and
            Cosmetics Rules, 1945, we don't process requests for Schedule X and other habit forming drugs.</p>
    </div>
    `
}