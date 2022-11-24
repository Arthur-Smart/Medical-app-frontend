import React from 'react'
import './servicesdetails.css'

function ServicesDetails() {
  return (
    <div className='services-details flex flex-col items-center justify-center pt-4' id='services'>
        <p className='font-bold text-3xl text-gray-700'>Our list of <span className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>multiple services</span> that we Offer</p>
        <p className='text-sky-600 mb-3'>From infants, teenages, adults and old age individuals we offer all medical services as per their needs</p>
        <div className='container flex flex-col items-center justify-center'>
        {/*Service container */}
            <div className='service-cont flex flex-wrap items-center justify-between'>
                <div className='cont-left2 rounded-md'>
                    <img src={require('../../assets/dental.jpg')}  alt=''/>
                </div>
                <div className='cont-right'>
                    <p className='font-bold text-2xl text-gray-700'>Dental Services <i class="fa-solid fa-teeth"></i></p>
                    <p className='text-gray-500'>
                            Why is dental health important?
                            Gum disease or periodontal disease may cause loss of teeth, infections and other complications. In addition to complications for your teeth and gums, research has linked periodontal disease to other health problems including heart complications, strokes, diabetes complications and respiratory issues.Here at Boresha Afya we treat all dental problems. We also add braces to your teeth, cleaning, filling and other dental services such a surgery and much more.
                            Our services are both for kinds and adults. We have packages on our dental services as well as offer with different seasons.Drink fluoridated water and brush with fluoride toothpaste. We have recommended some ways on how to deal with dental problems which includes;
                            Practice good oral hygien, Visit your dentist at least once a year, even if you have no natural teeth or have dentures.
                            Do not use any tobacco products,limit alcoholic drinks and if you have diabetes, work to maintain control of the disease. Our dental charges are friendly and affordable. We also allow payment on installments to some individuals based on certain conditions
                    </p>
                    <p className='font-medium text-gray-700  mt-4'>With Dr. Kimathi with his team</p>
                </div>
            </div>

             {/*Service container */}
            <div className='service-cont mt-24 flex-wrap  flex items-center justify-between'>
                <div className='cont-left2 rounded-md'>
                    <img src={require('../../assets/ent.jpg')}  alt=''/>
                </div>
                <div className='cont-right'>
                    <p className='font-bold text-2xl text-gray-700'>Otolaryngology(ENT) <i class="fa-solid fa-ear-listen"></i></p>
                    <p className='text-gray-500'>Includes all aspects of the head and neck region, skull base and facial plastic surgery. Specialist areas include: paediatric ENT, head and neck, voice and complex airway, otology (ear) and rhinology (nose). ENT manages surgical and medical disorders and involves many paediatric cases. 
                    A significant amount of work is performed in diagnosis and 70% of otolaryngology practice is outpatient with a day-case base. There is a significant medical element to ENT. Elective surgical sessions are likely to involve no more than two days a week. Emergency work is light but is often dramatic when airway specialists are required.
                    One of the key areas of concern for ENT surgeons are helping patients cope with or recover from diseases that impair the senses of hearing and balance. They will also be concerned with the functional aspects of breathing, eating and speech. ENT surgeons also deal with cancers in this region of the body.
                    Visit us when early signs are noticed and we will help and treat immediately. Avoid the last time minute. Reach us now
                    </p>
                    <p className='font-medium text-gray-700  mt-4'>With Dr. Kimathi with his team</p>
                </div>
            </div>

             {/*Service container */}
            <div className='service-cont mt-24 flex-wrap  flex items-center justify-between'>
                <div className='cont-left2 rounded-md'>
                    <img src={require('../../assets/Vase.jpg')}  alt=''/>
                </div>
                <div className='cont-right'>
                    <p className='font-bold text-2xl text-gray-700'>Vascular Surgery <i class="fa-solid fa-venus-mars"></i></p>
                                    <p className='text-gray-500'>Vascular surgeons deal with the veins and arteries. They are trained in the diagnosis and management of diseases affecting all parts of the vascular system. Common surgical procedures include carotid endarterectomy, angioplasty and lower limb bypass surgery.
                                    Vascular surgery became a surgical specialty in its own right in 2012, it was previously a subspecialty of general surgery.
                                    Working Conditions Vascular surgeons treat a wide range of conditions, meaning that their work can be very varied, though it is possible to specialise in a particular area. Vascular surgery is also a useful specialty if you want to focus on trauma surgery. Vascular surgeons are likely to work closely with colleagues in other medical specialties including vascular interventional radiologists and cardiothoracic surgeons. 
                                    Patients requiring vascular surgery suffer from many different vascular disorders that adversely affect quality of life, such as intermittent claudication, varicose veins, lymphatic disorders, hyperhidrosis, thoracic outlet syndrome, vascular malformations and many more. The core activities of the vascular specialist include:
                                    </p>
                    <p className='font-medium text-gray-700  mt-4'>With Dr. Kimathi with his team</p>
                </div>
            </div>

             {/*Service container */}
            <div className='service-cont mt-24  flex flex-wrap  items-center justify-center md:justify-between'>
                <div className='cont-left2 rounded-md'>
                    <img src={require('../../assets/Urology.jpg')}  alt=''/>
                </div>
                <div className='cont-right'>
                    <p className='font-bold text-2xl text-gray-700'>Urology Services <i class="fa-solid fa-file-waveform"></i></p>
                    <p className='text-gray-500'>Deals with the urogenital system: kidney, bladder and urinary problems, as well as men’s sexual and reproductive health. This includes diseases of the kidney, urinary tract stones, cancer (prostate, bladder, testicle and kidney), prostate, incontinence, erectile dysfunction, etc.
                         Some time is spent managing chronic conditions. Investigating and treating patients with prostate symptoms or bladder cancer takes up a large amount of a urologist’s time. Specialist areas include: complex pelvic surgery, uro-gynaecology, andrology and paediatric urology.
                         Urological surgeons undertake 3–4 operating sessions a week, including day-case surgery. They also undertake outpatient clinics and (possibly) special clinics, management/administration, teaching and research. 
                         Urology treats a wide range of diseases and uses a variety of operating techniques, including open surgery, laparoscopy and robotic surgery. Urology on call is usually not arduous and in smaller units it is increasingly common to cross-cover with neighbouring hospitals to reduce the on-call frequency
                    </p>
                    <p className='font-medium text-gray-700  mt-4'>With Dr. Kimathi with his team</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesDetails