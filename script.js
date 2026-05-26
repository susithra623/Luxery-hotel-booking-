// ─── DATA ────────────────────────────────────────────
const destinations = [
  {id:1,city:'Goa',state:'Goa',category:'beach',tag:'Trending',hotels:48,from:6500,desc:'Sun-kissed beaches, vibrant nightlife and Portuguese charm await you.',img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80'},
  {id:2,city:'Jaipur',state:'Rajasthan',category:'heritage',tag:'Royal',hotels:62,from:5800,desc:'The Pink City — where royal grandeur and Mughal architecture enchant every sense.',img:'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80'},
  {id:3,city:'Udaipur',state:'Rajasthan',category:'heritage',tag:'Romantic',hotels:34,from:7200,desc:'City of Lakes where palace hotels float dreamlike above shimmering waters.',img:'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&q=80'},
  {id:4,city:'Shimla',state:'Himachal Pradesh',category:'mountain',tag:'Cool',hotels:29,from:4500,desc:'Colonial hill station wrapped in pine forests and Himalayan panoramas.',img:'https://images.unsplash.com/photo-1591019478786-2c90b1e47748?w=600&q=80'},
  {id:5,city:'Munnar',state:'Kerala',category:'wellness',tag:'Serene',hotels:22,from:5200,desc:'Rolling tea gardens and misty mountain air for the ultimate wellness retreat.',img:'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=600&q=80'},
  {id:6,city:'Ranthambore',state:'Rajasthan',category:'wildlife',tag:'Adventure',hotels:18,from:8900,desc:'Witness royal Bengal tigers in their natural Rajasthani fortress habitat.',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'},
  {id:7,city:'Mumbai',state:'Maharashtra',category:'city',tag:'Iconic',hotels:95,from:9500,desc:'The city that never sleeps — iconic skylines, Bollywood glamour and world-class dining.',img:'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80'},
  {id:8,city:'Coorg',state:'Karnataka',category:'wellness',tag:'Nature',hotels:26,from:4800,desc:'Scotland of India with misty coffee estates and cascading waterfalls.',img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'},
  {id:9,city:'Manali',state:'Himachal Pradesh',category:'mountain',tag:'Snow',hotels:38,from:5500,desc:'Snow-capped peaks, adventure sports and cozy mountain chalets await you.',img:'https://images.unsplash.com/photo-1472791108553-c9405341e398?w=600&q=80'},
];

const hotels = [
  {id:1,name:'The Leela Palace',location:'Udaipur, Rajasthan',stars:5,type:'heritage',tag:'Heritage',price:12500,img:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=80',amenities:['Spa','Pool','Fine Dining','Butler'],rating:4.9,reviews:1240},
  {id:2,name:'Taj Exotica Resort',location:'Goa',stars:5,type:'beachfront',tag:'Beachfront',price:15800,img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80',amenities:['Beach','Spa','Watersports','Bar'],rating:4.8,reviews:982},
  {id:3,name:'Ananda in the Himalayas',location:'Rishikesh, Uttarakhand',stars:5,type:'resort',tag:'Wellness',price:22000,img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80',amenities:['Yoga','Spa','Ayurveda','Pool'],rating:4.9,reviews:743},
  {id:4,name:'Wildflower Hall',location:'Shimla, Himachal',stars:5,type:'resort',tag:'Mountain',price:18500,img:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=700&q=80',amenities:['Ski','Pool','Fireplace','Spa'],rating:4.7,reviews:621},
  {id:5,name:'Umaid Bhawan Palace',location:'Jodhpur, Rajasthan',stars:5,type:'heritage',tag:'Royal',price:35000,img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80',amenities:['Pool','Spa','Fine Dining','Museum'],rating:5.0,reviews:409},
  {id:6,name:'Kumarakom Lake Resort',location:'Kerala',stars:5,type:'resort',tag:'Backwaters',price:11800,img:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80',amenities:['Houseboat','Ayurveda','Pool','Spa'],rating:4.8,reviews:873},
  {id:7,name:'The Oberoi Mumbai',location:'Mumbai, Maharashtra',stars:5,type:'5star',tag:'City',price:19000,img:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700&q=80',amenities:['Ocean View','Spa','Fine Dining','Gym'],rating:4.8,reviews:1105},
  {id:8,city:'Coorg',name:'Orange County Resort',location:'Coorg, Karnataka',stars:4,type:'boutique',tag:'Boutique',price:8500,img:'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=700&q=80',amenities:['Coffee Tour','Pool','Spa','Trekking'],rating:4.6,reviews:534},
  {id:9,name:'Aman-i-Khas',location:'Ranthambore, Rajasthan',stars:5,type:'resort',tag:'Safari',price:45000,img:'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?w=700&q=80',amenities:['Safari','Spa','Butler','Bonfire'],rating:4.9,reviews:312},
];

const offers = [
  {title:'Monsoon Magic',discount:'40% OFF',code:'MONSOON40',img:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80',desc:'Celebrate the rains at select resort properties across Kerala and Goa.',original:15000,offer:9000,ends:'3d 12h'},
  {title:'Royal Rajasthan Package',discount:'30% OFF',code:'ROYAL30',img:'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80',desc:'3-night stays at heritage palaces including breakfast & cultural experiences.',original:22000,offer:15400,ends:'5d 8h'},
  {title:'Honeymoon Bliss',discount:'₹5000 Gift',code:'HONEY5K',img:'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80',desc:'Complimentary spa treatment, candle-lit dinner and room decoration for couples.',original:18000,offer:13500,ends:'1d 6h'},
];

const testimonials = [
  {name:'Priya Krishnan',loc:'Chennai, Tamil Nadu',text:'LuxeNest made our anniversary stay at Taj Udaipur absolutely magical. The personal attention to detail and seamless booking process left us speechless.',stars:5,img:'https://randomuser.me/api/portraits/women/44.jpg'},
  {name:'Arjun Mehta',loc:'Mumbai, Maharashtra',text:'Booked the Ananda Himalayas retreat through LuxeNest. The entire experience from booking to checkout was elevated — truly luxury at every touchpoint.',stars:5,img:'https://randomuser.me/api/portraits/men/32.jpg'},
  {name:'Fatima Al-Rashid',loc:'Dubai, UAE',text:'As a frequent India traveller, LuxeNest is now my go-to. The Arabic interface made planning so much easier and the rates are unbeatable.',stars:5,img:'https://randomuser.me/api/portraits/women/68.jpg'},
  {name:'Rajesh Gupta',loc:'Delhi, NCR',text:'The heritage palace experience in Jaipur was otherworldly. LuxeNest\'s curation is exceptional — every hotel felt personally chosen.',stars:5,img:'https://randomuser.me/api/portraits/men/75.jpg'},
  {name:'Sneha Patel',loc:'Ahmedabad, Gujarat',text:'Used LuxeNest for a family trip to Coorg — three generations all thrilled. The resort suggestions were spot-on and the children\'s facilities were superb.',stars:5,img:'https://randomuser.me/api/portraits/women/22.jpg'},
];

// ─── TRANSLATIONS ─────────────────────────────────────
const translations = {
  en:{nav_home:'HOME',nav_dest:'DESTINATIONS',nav_hotels:'HOTELS',nav_deals:'DEALS',nav_about:'ABOUT',nav_reviews:'REVIEWS',nav_book:'BOOK NOW',hero_badge:'✦ INDIA\'S FINEST LUXURY HOTELS ✦',hero_title1:'Where Comfort',hero_title2:'Meets Elegance',hero_sub:'Discover handpicked luxury stays across India\'s most breathtaking destinations',lbl_dest:'DESTINATION',lbl_checkin:'CHECK IN',lbl_checkout:'CHECK OUT',lbl_guests:'GUESTS',btn_search:'SEARCH',scroll_down:'SCROLL DOWN',loading:'LOADING YOUR EXPERIENCE',modal_title:'Book Your Stay',lbl_name:'FULL NAME',lbl_email:'EMAIL',lbl_room:'ROOM TYPE',price_room:'Room (1 night)',price_tax:'Taxes & Fees (18%)',price_total:'TOTAL',confirm_book:'CONFIRM BOOKING',nl_title:'Join the LuxeNest Circle',nl_sub:'Subscribe to receive exclusive offers and curated travel inspiration.',nl_btn:'SUBSCRIBE',footer_tagline:'Where Comfort Meets Elegance. India\'s most trusted luxury hotel booking platform.',footer_quick:'QUICK LINKS',footer_dest:'DESTINATIONS',footer_contact:'CONTACT',footer_copy:'© 2025 LuxeNest. All rights reserved.'},
  hi:{nav_home:'होम',nav_dest:'गंतव्य',nav_hotels:'होटल',nav_deals:'ऑफर',nav_about:'हमारे बारे में',nav_reviews:'समीक्षाएं',nav_book:'बुक करें',hero_badge:'✦ भारत के सर्वश्रेष्ठ लक्जरी होटल ✦',hero_title1:'जहाँ आराम',hero_title2:'मिलती है शान से',hero_sub:'भारत के सबसे खूबसूरत स्थलों पर चुनिंदा लक्जरी प्रवास की खोज करें',lbl_dest:'गंतव्य',lbl_checkin:'आगमन',lbl_checkout:'प्रस्थान',lbl_guests:'मेहमान',btn_search:'खोजें',modal_title:'अपना प्रवास बुक करें',nl_title:'LuxeNest परिवार से जुड़ें',nl_btn:'सदस्यता लें',footer_copy:'© 2025 LuxeNest. सर्वाधिकार सुरक्षित।'},
  ta:{nav_home:'முகப்பு',nav_dest:'இடங்கள்',nav_hotels:'ஹோட்டல்',nav_deals:'சலுகைகள்',nav_about:'எங்களைப் பற்றி',nav_reviews:'விமர்சனங்கள்',nav_book:'பதிவு செய்',hero_badge:'✦ இந்தியாவின் சிறந்த ஆடம்பர ஹோட்டல்கள் ✦',hero_title1:'ஆறுதல்',hero_title2:'சந்திக்கிறது நேர்த்தியை',hero_sub:'இந்தியாவின் மிகவும் அழகான இடங்களில் ஆடம்பர தங்குமிடங்களை கண்டறியுங்கள்',lbl_dest:'இடம்',lbl_checkin:'வருகை',lbl_checkout:'புறப்பாடு',lbl_guests:'விருந்தினர்',btn_search:'தேடு',modal_title:'உங்கள் தங்குமிடம் பதிவு செய்யவும்',nl_title:'LuxeNest குடும்பத்தில் சேரவும்',nl_btn:'சந்தா செலுத்தவும்',footer_copy:'© 2025 LuxeNest. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'},
  te:{nav_home:'హోమ్',nav_dest:'గమ్యాలు',nav_hotels:'హోటళ్లు',nav_deals:'డీల్స్',nav_about:'మా గురించి',nav_reviews:'సమీక్షలు',nav_book:'బుక్ చేయండి',hero_badge:'✦ భారతదేశంలోని అత్యుత్తమ లగ్జరీ హోటళ్లు ✦',lbl_dest:'గమ్యం',lbl_checkin:'చెక్ ఇన్',lbl_checkout:'చెక్ అవుట్',lbl_guests:'అతిథులు',btn_search:'వెతకండి',modal_title:'మీ స్టే బుక్ చేయండి',nl_btn:'సభ్యత్వం పొందండి',footer_copy:'© 2025 LuxeNest. సర్వహక్కులు రక్షించబడ్డాయి.'},
  fr:{nav_home:'ACCUEIL',nav_dest:'DESTINATIONS',nav_hotels:'HÔTELS',nav_deals:'OFFRES',nav_about:'À PROPOS',nav_reviews:'AVIS',nav_book:'RÉSERVER',hero_badge:'✦ LES PLUS BEAUX HÔTELS DE LUXE EN INDE ✦',hero_title1:'Le Confort',hero_title2:'Rencontre l\'Élégance',lbl_dest:'DESTINATION',lbl_checkin:'ARRIVÉE',lbl_checkout:'DÉPART',lbl_guests:'VOYAGEURS',btn_search:'RECHERCHER',modal_title:'Réservez votre séjour',nl_btn:'S\'ABONNER',footer_copy:'© 2025 LuxeNest. Tous droits réservés.'},
  ar:{nav_home:'الرئيسية',nav_dest:'الوجهات',nav_hotels:'الفنادق',nav_deals:'العروض',nav_about:'من نحن',nav_reviews:'المراجعات',nav_book:'احجز الآن',hero_badge:'✦ أفضل الفنادق الفاخرة في الهند ✦',hero_title1:'حيث الراحة',hero_title2:'تلتقي بالأناقة',lbl_dest:'الوجهة',lbl_checkin:'تسجيل الوصول',lbl_checkout:'تسجيل المغادرة',lbl_guests:'الضيوف',btn_search:'بحث',modal_title:'احجز إقامتك',nl_btn:'اشترك',footer_copy:'© 2025 LuxeNest. جميع الحقوق محفوظة.'},
  zh:{nav_home:'首页',nav_dest:'目的地',nav_hotels:'酒店',nav_deals:'优惠',nav_about:'关于我们',nav_reviews:'评价',nav_book:'立即预订',hero_badge:'✦ 印度最顶级豪华酒店 ✦',hero_title1:'舒适相遇',hero_title2:'典雅之美',lbl_dest:'目的地',lbl_checkin:'入住',lbl_checkout:'退房',lbl_guests:'房客',btn_search:'搜索',modal_title:'预订您的入住',nl_btn:'订阅',footer_copy:'© 2025 LuxeNest. 保留所有权利。'},
};

let currentLang = 'en';
function setLang(lang){
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b=>{if(b.textContent.trim().toLowerCase()===lang||b.onclick.toString().includes(`'${lang}'`))b.classList.add('active');});
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(t[key]) el.textContent = t[key];
  });
  document.body.setAttribute('dir', lang==='ar'?'rtl':'ltr');
}

// ─── RENDER DESTINATIONS ──────────────────────────────
let currentDestFilter = 'all';
function renderDestinations(filter){
  const grid = document.getElementById('destGrid');
  const filtered = filter==='all' ? destinations : destinations.filter(d=>d.category===filter);
  grid.innerHTML = filtered.map(d=>`
    <div class="dest-card reveal" onclick="scrollToHotels()">
      <img src="${d.img}" alt="${d.city}" loading="lazy"/>
      <div class="dest-overlay">
        <div class="dest-badge">${d.tag}</div>
        <div class="dest-city">${d.city}</div>
        <div class="dest-state">${d.state}</div>
        <div class="dest-meta">
          <span><i class="fas fa-hotel"></i> ${d.hotels} Hotels</span>
          <span><i class="fas fa-rupee-sign"></i> From ₹${d.from.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <div class="dest-hover">
        <div class="dest-hover-title">${d.city}</div>
        <p>${d.desc}</p>
        <button class="dest-hover-btn">EXPLORE HOTELS</button>
      </div>
    </div>
  `).join('');
  observeReveal();
}
function filterDest(cat){
  currentDestFilter = cat;
  document.querySelectorAll('.int-tab').forEach(t=>t.classList.remove('active'));
  event.target.classList.add('active');
  renderDestinations(cat);
}
function scrollToHotels(){document.querySelector('#hotels').scrollIntoView({behavior:'smooth'});}

// ─── RENDER HOTELS ────────────────────────────────────
let currentHotelFilter = 'all';
let wishlist = new Set();
function renderHotels(filter){
  const grid = document.getElementById('hotelsGrid');
  const filtered = filter==='all' ? hotels : hotels.filter(h=>h.type===filter);
  grid.innerHTML = filtered.map(h=>`
    <div class="hotel-card reveal" onclick="openBookingModal(${h.id})">
      <div class="hotel-img">
        <img src="${h.img}" alt="${h.name}" loading="lazy"/>
        <div class="hotel-tag">${h.tag}</div>
        <div class="hotel-wish ${wishlist.has(h.id)?'active':''}" onclick="toggleWish(event,${h.id})">
          <i class="fa${wishlist.has(h.id)?'s':'r'} fa-heart"></i>
        </div>
      </div>
      <div class="hotel-body">
        <div class="hotel-stars">${'★'.repeat(h.stars)}${'☆'.repeat(5-h.stars)}</div>
        <div class="hotel-name">${h.name}</div>
        <div class="hotel-loc"><i class="fas fa-map-marker-alt" style="color:var(--gold-dark);font-size:.7rem;"></i> ${h.location}</div>
        <div class="hotel-amenities">${h.amenities.map(a=>`<span class="amenity">${a}</span>`).join('')}</div>
        <div class="hotel-footer">
          <div class="hotel-price">
            <span class="price-val">₹${h.price.toLocaleString('en-IN')}</span>
            <div class="price-night">PER NIGHT</div>
          </div>
          <button class="hotel-book">BOOK NOW</button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}
function filterHotels(type){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  event.target.classList.add('active');
  renderHotels(type);
}
function toggleWish(e,id){
  e.stopPropagation();
  if(wishlist.has(id)){wishlist.delete(id);showToast('Removed from wishlist');}
  else{wishlist.add(id);showToast('Added to wishlist ❤');}
  renderHotels(currentHotelFilter);
}

// ─── RENDER OFFERS ────────────────────────────────────
function renderOffers(){
  document.getElementById('offersGrid').innerHTML = offers.map(o=>`
    <div class="offer-card reveal">
      <div class="offer-ribbon">${o.discount}</div>
      <div class="offer-img"><img src="${o.img}" alt="${o.title}" loading="lazy"/></div>
      <div class="offer-body">
        <div class="offer-title">${o.title}</div>
        <div class="offer-desc">${o.desc}</div>
        <div class="offer-countdown" id="cd-${o.code}"></div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="offer-original">₹${o.original.toLocaleString('en-IN')}</div>
          <div class="offer-price">₹${o.offer.toLocaleString('en-IN')}</div>
        </div>
        <button class="offer-btn" onclick="applyOffer('${o.code}')">CLAIM OFFER · ${o.code}</button>
      </div>
    </div>
  `).join('');
  startCountdowns();
  observeReveal();
}
function applyOffer(code){showToast(`✦ Code ${code} applied!`);}

// ─── COUNTDOWN ────────────────────────────────────────
function startCountdowns(){
  offers.forEach(o=>{
    const el = document.getElementById('cd-'+o.code);
    if(!el) return;
    const parts = o.ends.split(' ');
    let d=parseInt(parts[0]),h=parseInt(parts[1]);
    let totalSec = d*86400+h*3600;
    function render(){
      const dd=Math.floor(totalSec/86400),hh=Math.floor((totalSec%86400)/3600),mm=Math.floor((totalSec%3600)/60),ss=totalSec%60;
      el.innerHTML=`
        ${item(String(dd).padStart(2,'0'),'DAYS')}
        ${item(String(hh).padStart(2,'0'),'HRS')}
        ${item(String(mm).padStart(2,'0'),'MIN')}
        ${item(String(ss).padStart(2,'0'),'SEC')}
      `;
      if(totalSec>0){totalSec--;setTimeout(render,1000);}
    }
    function item(n,l){return`<div class="count-item"><div class="count-num">${n}</div><div class="count-label">${l}</div></div>`;}
    render();
  });
}

// ─── TESTIMONIALS ─────────────────────────────────────
let testSlide = 0;
function renderTestimonials(){
  document.getElementById('testimonialTrack').innerHTML = testimonials.map(t=>`
    <div class="testimonial-card">
      <div class="test-quote">"</div>
      <p class="test-text">${t.text}</p>
      <div class="test-author">
        <img class="test-avatar" src="${t.img}" alt="${t.name}"/>
        <div>
          <div class="test-name">${t.name}</div>
          <div class="test-loc">${t.loc}</div>
          <div class="test-stars">${'★'.repeat(t.stars)}</div>
        </div>
      </div>
    </div>
  `).join('');
}
function slideTestimonials(dir){
  const track = document.getElementById('testimonialTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  const max = cards.length - (window.innerWidth>900?3:window.innerWidth>600?2:1);
  testSlide = Math.max(0,Math.min(testSlide+dir,max));
  const cardW = cards[0].offsetWidth + 24;
  track.style.transform = `translateX(-${testSlide*cardW}px)`;
}

// ─── BOOKING MODAL ────────────────────────────────────
let activeHotel = null;
function openBookingModal(id){
  const modal = document.getElementById('bookingModal');
  if(id){
    activeHotel = hotels.find(h=>h.id===id);
    document.getElementById('modalHotelImg').src = activeHotel.img;
    document.getElementById('modalHotelImg').style.display='block';
    document.getElementById('modalHotelName').textContent = activeHotel.name+' · '+activeHotel.location;
    updateModalPrice();
  } else {
    activeHotel = null;
    document.getElementById('modalHotelImg').style.display='none';
    document.getElementById('modalHotelName').textContent = '';
    document.getElementById('mPriceRoom').textContent='₹0';
    document.getElementById('mPriceTax').textContent='₹0';
    document.getElementById('mPriceTotal').textContent='₹0';
  }
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('bookingModal').classList.remove('open');
  document.body.style.overflow='';
}
function updateModalPrice(){
  if(!activeHotel) return;
  const p = activeHotel.price;
  const tax = Math.round(p*0.18);
  document.getElementById('mPriceRoom').textContent='₹'+p.toLocaleString('en-IN');
  document.getElementById('mPriceTax').textContent='₹'+tax.toLocaleString('en-IN');
  document.getElementById('mPriceTotal').textContent='₹'+(p+tax).toLocaleString('en-IN');
}
function confirmBooking(){
  const name=document.getElementById('mName').value.trim();
  const email=document.getElementById('mEmail').value.trim();
  const ci=document.getElementById('mCheckIn').value;
  const co=document.getElementById('mCheckOut').value;
  if(!name||!email||!ci||!co){showToast('⚠ Please fill all fields');return;}
  closeModal();
  showToast('✦ Booking confirmed! Check your email');
}

// ─── SEARCH ───────────────────────────────────────────
function handleSearch(){
  const city = document.getElementById('heroCity').value;
  if(!city){showToast('Please select a destination');return;}
  showToast('✦ Searching hotels in '+city+'...');
  setTimeout(()=>{
    document.querySelector('#hotels').scrollIntoView({behavior:'smooth'});
  },600);
}

// ─── NEWSLETTER ───────────────────────────────────────
function subscribeNewsletter(){
  const e = document.getElementById('nlEmail').value.trim();
  if(!e||!e.includes('@')){showToast('Please enter a valid email');return;}
  showToast('✦ Welcome to the LuxeNest Circle!');
  document.getElementById('nlEmail').value='';
}

// ─── TOAST ────────────────────────────────────────────
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ─── NAVBAR ───────────────────────────────────────────
function toggleMenu(){
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}
function closeMenu(){
  document.getElementById('navLinks').classList.remove('open');
}
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled',window.scrollY>50);
  document.getElementById('backTop').classList.toggle('visible',window.scrollY>400);
  // active nav
  const sections=['home','destinations','hotels','deals','about','reviews'];
  let cur='';
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(el&&window.scrollY>=el.offsetTop-100)cur=id;
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+cur);
  });
});

// ─── PARTICLES ───────────────────────────────────────
function createParticles(){
  const c = document.getElementById('particles');
  for(let i=0;i<30;i++){
    const p = document.createElement('div');
    p.className='particle';
    p.style.left = Math.random()*100+'%';
    p.style.top = Math.random()*100+'%';
    p.style.setProperty('--d',3+Math.random()*6+'s');
    p.style.setProperty('--delay',Math.random()*6+'s');
    c.appendChild(p);
  }
}

// ─── STATS COUNTER ───────────────────────────────────
function animateCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target = +el.getAttribute('data-count');
    let start = 0;
    const step = target/80;
    const t = setInterval(()=>{
      start = Math.min(start+step, target);
      el.textContent = Math.floor(start).toLocaleString('en-IN')+(target>=100&&target<1000?'+':target>=1000?'+':'');
      if(start>=target)clearInterval(t);
    },20);
  });
}
const statsObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){animateCounters();statsObs.disconnect();}});
},{threshold:.3});
document.querySelector('#stats') && statsObs.observe(document.querySelector('#stats'));

// ─── SCROLL REVEAL ───────────────────────────────────
function observeReveal(){
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>{
    revealObs.observe(el);
  });
}
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target);}});
},{threshold:.12});

// ─── INIT ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded',()=>{
  // set default dates
  const today = new Date();
  const tom = new Date(today); tom.setDate(tom.getDate()+1);
  const dt = d=>d.toISOString().split('T')[0];
  ['heroCheckIn','mCheckIn'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=dt(today);});
  ['heroCheckOut','mCheckOut'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=dt(tom);});

  createParticles();
  renderDestinations('all');
  renderHotels('all');
  renderOffers();
  renderTestimonials();
  observeReveal();

  // hide loader
  setTimeout(()=>{
    const loader = document.getElementById('loader');
    loader.style.opacity='0';
    setTimeout(()=>loader.style.display='none',600);
  },2200);

  // close modal on overlay click
  document.getElementById('bookingModal').addEventListener('click',function(e){
    if(e.target===this)closeModal();
  });
});

function scrollTo(sel){document.querySelector(sel)?.scrollIntoView({behavior:'smooth'});}
