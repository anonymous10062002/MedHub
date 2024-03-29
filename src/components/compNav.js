export function compNav() {
    return `
    <div id="nav">
        <div id="upperPartNav">
            <div id="plans"> <a href="index.html"><img src="./src/images/logo.png" alt="logo image"></a>
                <p>MEDICINES</p>
                <p>LEB TESTS</p>
                <p>CONSULT DOCTORS</p>
                <p>COVID-19</p>
                <p>AYURVEDA</p>
                <p>CARE PLAN</p>
            </div>
            <div id="pages">
                <a href="./login.html">Login|Sign Up</a>
                <a href="./offers.html">Offers</a>
                <a href="./cart.html" class="placeicon"> &#xf07a;</a>
            </div>
        </div>
        <div id="middlePartNav">
            <div id="location">
                <p class="placeicon">&#xf041;</p>
                <select>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Kolkata</option>
                    <option>Chennai</option>
                    <option>Ahemdabad</option>
                    <option>Hyderabad</option>
                    <option>Pune</option>
                    <option>Surat</option>
                    <option>Kanpur</option>
                </select>
                <div id="searchBar">
                    <input id="srch"  type="text" placeholder="Search for Medicines and Health Products">
                    <button id="srchbtn" class="placeicon">&#xf002;</button>
                </div>
            </div>
            <div id="quickOrder">
                <p>QUICK BUY! Get 25% off on medicines*</p>
                <button>Quick order</button>
            </div>
        </div>
        <div id="lowerPartNav">
            <!--------------------------------------------------------------------------->
            <div>
                <div id="resorces" class="menu " >Resorces Center</div>
                <div class="dropDown">
                    <ul>
                    
                        <li><a href="disease.html">All Diseases</a></li>
                        <li><a href="medicine.html">All Medicine</a></li>
                        <li>Medicines by Therapeutic Class</li>
                    </ul>
                </div>
            </div>
            <!--------------------------------------------------------------------------->
            <div>
                <div id="vitamins" class="menu vitamin1">Vitamins & Nutrition</div>
                <div class="vitamin">
                    <ul>
                        <li>Vitamins & Supplements</li>
                        <li>Multivitamins</li>
                        <li>Vitamins A-Z</li>
                        <li>Mineral Supplements</li>
                        <li>Vitamin B12 & B Complex</li>
                        <li>Nutritional Drinks</li>
                        <li>Adult Daily Nutrition</li>
                        <li>Kids Nutrition (2-15 Yrs)</li>
                        <li>Women Nutrition</li>
                        <li>Health Food & Drinks</li>
                    </ul>
                    <ul>
                        <li><a href="protein_supliments.html">Protein Supplements</a></li>
                        <li>Whey Protein</li>
                        <li>Amino Acids</li>
                        <li>Mass Gainers</li>
                        <li>Workout Essential</li>
                        <li>Fat Burners</li>
                        <li>Omega & Fish Oil</li>
                        <li>Fish Oil</li>
                        <li> Cod Liver Oil</li>
                        <li>Flax Seed Oil</li>
                    </ul>
                    <ul>
                        <li> Specialty Supplements</li>
                        <li>Plant based Supplements </li>
                        <li>Beauty Supplements </li>
                        <li> Pre and Probiotics</li>
                        <li>Glucosamine</li>
                        <li>Collagen</li>
                        <li>Antioxidants</li>
                        <li>Biotin</li>
                        <li>Weight Management</li>
                        <li>Weight Management Herbs</li>
                    </ul>
                </div>
            </div>
            <!--------------------------------------------------------------------------->
            <div>
                <div id="diabetes" class="menu diabetes1" ">Diabetes</div>
                <div class="diabetes">
                    <ul>
                        <li>Diabetes Monitoring</li>
                        <li>Blood Glucose Monitors</li>
                        <li>Test Strips & Lancets</li>
                        <li>Syringes & Pens</li>
                        <li>Sugar Free</li>
                        <li>Diabetic Medicines</li>
                        <li>Vitamins, Minerals & Antioxidants</li>
                        <li>Homeopathy Medicines</li>
                    </ul>
                    <ul>
                        <li>Sugar Substitutes</li>
                        <li> Diabetic Diet</li>
                        <li>Juices & Vinegars</li>
                        <li> Diabetic Nutrition Supplements</li>
                        <li>Diabetic Foot Health</li>
                    </ul>
                </div>
            </div>
            <!--------------------------------------------------------------------------->
            <div>
                <div id="healthcare" class="menu Health1" >Healthcare Devices</div>
                <div class="Health">
                    <ul>
                        <li> Top brands in Healthcare Devices</li>
                        <li>Dr. Morepen Devices</li>
                        <li>Accu-chek</li>
                        <li>OneTouch</li>
                        <li>Omron</li>
                        <li>Contour</li>
                        <li>Dr Trust</li>
                        <li>BP Monitors</li>
                        <li>Oxygen Concentrators & Cans</li>
                        <li>Thermometers</li>
                    </ul>
                    <ul>
                        <li>Masks (N95, Surgical and more)</li>
                        <li> Face Shield</li>
                        <li> Surgical Masks</li>
                        <li> N95 Masks</li>
                        <li> Nebulizers & Vaporizers</li>
                        <li>Oximeters & Pedometers</li>
                        <li>Vital Signs Monitors & Wearables</li>
                        <li>Body Massager</li>
                        <li> Diabetes Monitors</li>
                        <li>Mobility Equipments</li>
                    </ul>
                    <ul>
                        <li> Supports & Braces</li>
                        <li>Neck & Shoulder Support</li>
                        <li>Knee & Leg Support</li>
                        <li>Back & Abdomen Support</li>
                        <li>Ankle & Foot Support</li>
                        <li>Hand & Wrist Braces</li>
                        <li>Arm & Elbow Support</li>
                        <li>Cervical Pillows</li>
                        <li>Compression support & sleeves</li>
                        <li>Heel support</li>
                    </ul>
                </div>
            </div>
            <!--------------------------------------------------------------------------->
            <div>
                <div id="personal" class="menu Personal1">Personal Care</div>
                <div class="Personal">
                    <ul>
                        <li> Sexual Wellness</li>
                        <li>Condoms</li>
                        <li>Lubricants & Massage Gels</li>
                        <li>Personal body massagers</li>
                        <li>Men Performance Enhancers</li>
                        <li>Sexual Health Supplements</li>
                        <li>Skin Care</li>
                        <li>Body Lotions</li>
                        <li>Mosquito Repellents</li>
                        <li>Lip Balm</li>
                    </ul>
                    <ul>
                        <li>Baby Care</li>
                        <li>Baby & Infant Food</li>
                        <li>Baby Diapers, wipes & more</li>
                        <li>Nursing & Feeding</li>
                        <li>Baby Bath Essentials</li>
                        <li>Baby Skin Care</li>
                        <li>Baby Healthcare</li>
                        <li>Baby Oral Health</li>
                        <li>Hair Care</li>
                        <li>Shampoo</li>
                    </ul>
                    <ul>
                        <li> Elderly Care</li>
                        <li>Adult Diapers</li>
                        <li>Bone & Joint Health</li>
                        <li>Living & Safety Aids</li>
                        <li>Orthopaedic Supports</li>
                        <li>Women Care</li>
                        <li>Feminine Hygiene</li>
                        <li>Women Care Supplements</li>
                        <li>Mother Care</li>
                        <li>Menopause</li>
                    </ul>
                    <ul>
                        <li>Men Care</li>
                        <li>Men Grooming</li>
                        <li>Oral Care</li>
                        <li>Pet Care</li>
                        <li> Pet Grooming</li>
                        <li> Pet Food</li>
                        <li>Pet Health Care</li>
                    </ul>
                </div>
            </div>
            <!--------------------------------------------------------------------------->
            <div>
                <div id="health" class="menu HealthC1">Health Conditions</div>
                <div class="HealthC">
                    <ul>
                        <li>Stomach Care</li>
                        <li>Heart Care</li>
                        <li>Bone, Joint & Muscle Care</li>
                        <li> Pain Relief</li>
                        <li>Heating Aids</li>
                        <li>Omnigel products</li>
                        <li> Eye Care</li>
                        <li> Eye Lubricants</li>
                        <li>Ear Care</li>
                        <li>Hearing Aid Devices</li>
                    </ul>
                    <ul>
                        <li> First Aid</li>
                        <li>Liver Care</li>
                        <li>Cold & Cough</li>
                        <li>Fever</li>
                        <li>Mental Wellness</li>
                        <li>Kidney Care</li>
                        <li>Respiratory Care</li>
                        <li>Piles, Fissures & Fistula</li>
                        <li>Smoking Cessation</li>
                        <li>Derma Care</li>
                    </ul>
                </div>
            </div>
            <!--------------------------------------------------------------------------->
            <div>
                <div id="ayurveda" class="menu Ayurveda1">Ayurveda Products</div>
                <div class="Ayurveda">
                    <ul>
                        <li>Ayurveda Top Brands</li>
                        <li> Dabur</li>
                        <li>Sri Sri Tattva</li>
                        <li>Kerala Ayurveda</li>
                        <li>Jiva Ayurveda</li>
                        <li> Patanjali</li>
                        <li>Chyawanparash</li>
                        <li>Popular categories</li>
                        <li>Herbal Juice</li>
                        <li>Ayurvedic Immunity Boosters</li>
                    </ul>
                    <ul>
                        <li> Top Health Concerns</li>
                        <li>Ayurvedic Respiratory care</li>
                        <li>Cough, Cold & Fever</li>
                        <li>Sexual Wellness</li>
                        <li>Bone, Joint and Muscle Care</li>
                        <li>Stomach Care</li>
                        <li>Diabetes Care.</li>
                        <li>Liver Care</li>
                        <li>Mind Care</li>
                        <li>Cardiac Care</li>
                    </ul>
                    <ul>
                        <li> Unani Medicines</li>
                        <li>Hamdard Unani</li>
                        <li>AMU Dawakhana</li>
                        <li>Rex Remedies</li>
                        <li>Dehlvi Remedies</li>
                        <li>Ayurvedic Medicine</li>
                    </ul>
                </div>
            </div>
            <!--------------------------------------------------------------------------->
            <div>
                <div id="homeopathy" class="menu homopathy1">Homeopathy</div>
                <div class="homopathy">
                    <ul class="homopathylist">
                        <li>Homeopathy Top Brands</li>
                        <li>SBL Homoeopathy</li>
                        <li>Dr Reckeweg</li>
                        <li>Dr Willmar Schwabe India</li>
                        <li> Adel Pekana</li>
                        <li> BJAIN Homeopathy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
}