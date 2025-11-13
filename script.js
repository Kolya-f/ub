// Додаємо функцію для виклику перекладу модального вікна з основної функції перекладу
function translateWorkModals(lang) {
    // Оновлюємо мову в документі
    document.documentElement.lang = lang;
    
    // Викликаємо подію для перекладу відкритого модального вікна
    window.dispatchEvent(new CustomEvent('languageChange'));
}







// Функція для перекладу сторінки
function translatePage(lang) {


    const translations = {
        uk: {
            // Герой секція
            'Professional Cleaning': 'Професійний клінінг',
            'in Dnipro': 'у Дніпрі',
            
            'Not enough time to communicate with loved ones? Entrust cleaning to professionals!': 'Не вистачає часу на спілкування з близькими?Довірте прибирання професіоналам!',
            
            '🔄 Calculate Cost': '🔄 Розрахувати вартість',
            '📞 Request a Call': '📞 Замовити дзвінок',
            'Scroll Down': 'Прокрутіть нижче',

            // Навігація
            '👨‍💼 About Us': '👨‍💼 Про нас',
            '🛠️ Types of Work': '🛠️ Типи робіт',
            '📸 Our Works': '📸 Наші роботи',
            '🧮 Calculator': '🧮 Калькулятор',
            '✨ Services': '✨ Послуги',
            '🏆 Advantages': '🏆 Переваги',
            '📞 Contacts': '📞 Контакти',
            '🔄 Before/After': '🔄 До/Після',
            '🏢 Our Clients': '🏢 Наші клієнти',
            '💬 Reviews': '💬 Відгуки',
            '📜 Certificates': '📜 Сертифікати',
            'Settings': 'Налаштування',
            'About Site': 'Про сайт',

 
 
 
 
 
 
  // Відгуки - імена
    'Iryna Petrenko': 'Ірина Петренко',
    'Oleksandr Koval': 'Олександр Коваль',
    'Maria Sydorenko': 'Марія Сидоренко',
    'Serhiy Ivanenko': 'Сергій Іваненко',
    'Nataliya Boyko': 'Наталія Бойко',
    'Viktor Pavlenko': 'Віктор Павленко',
    'Tetiana Melnyk': 'Тетяна Мельник',
    'Andriy Shevchenko': 'Андрій Шевченко',
    'Oksana Lysenko': 'Оксана Лисенко',
    'Maksym Hordiyenko': 'Максим Гордієнко',
    'Yuliya Savchenko': 'Юлія Савченко',
    'Dmytro Bondarenko': 'Дмитро Бондаренко',
    'Anna Kravchenko': 'Анна Кравченко',
    'Pavlo Tkachenko': 'Павло Ткаченко',
    'Kateryna Romanenko': 'Катерина Романенко',
    'Vasyl Kovalchuk': 'Василь Ковальчук',
    'Larysa Shevchuk': 'Лариса Шевчук',
    'Ihor Pylypenko': 'Ігор Пилипенко',
    'Nadiya Bilyk': 'Надія Білик',
    'Roman Lytvynenko': 'Роман Литвиненко',
    'Svitlana Honcharenko': 'Світлана Гончаренко',
    'Artem Sych': 'Артем Сич',
    'Olga Tereshchenko': 'Ольга Терещенко',
    'Mykhaylo Zakharchenko': 'Михайло Захарченко',
    'Halyna Semenyuk': 'Галина Семенюк',
    'Volodymyr Brovarenko': 'Володимир Броваренко',
    'Tetiana Kushnir': 'Тетяна Кушнір',
    'Yuriy Melnyk': 'Юрій Мельник',
    'Lyudmyla Panchenko': 'Людмила Панченко',
    'Petro Shevchenko': 'Петро Шевченко',

    // Відгуки - тексти
    'Ordered general cleaning after the New Year holidays. The result is impressive! The apartment shines with cleanliness. I was especially impressed by the attention to details - they even washed window frames and blinds. The staff is very polite and professional. I have already recommended to friends and plan to make regular cleaning permanent.': 'Замовляла генеральне прибирання після новорічних свят. Результат вражає! Квартира сяє чистотой. Особливо вразила увага до деталей - вимили навіть віконні рами та жалюзі. Персонал дуже ввічливий та професійний. Вже порекомендувала подругам та планую зробити регулярне прибирання постійним.',

    'Ordered office cleaning of 150 m² after a corporate party. The guys did just great! In 4 hours they removed all traces of the party, took out the trash, washed floors, tables and even arranged all documents in their places. Very convenient that they work from the morning - by 9 everything was ready. The price is absolutely adequate for such amount of work.': 'Замовляв прибирання офісу площею 150 м² після корпоративу. Хлопці впорались просто відмінно! За 4 години прибрали всі сліди вечірки, винесли сміття, вимили підлоги, столи та навіть розставили всі документи по місцях. Дуже зручно, що працюють з ранку - о 9 вже все було готове. Ціна абсолютно адекватна за такий об\'єм роботи.',

    'Used the regular cleaning service 2 times a month. Generally very satisfied - the apartment is always clean, they use quality eco-friendly products, which is important with a small child. The only drawback - sometimes they are late for 15-20 minutes, but always warn about it. Overall I recommend the service!': 'Скористалась послугою регулярного прибирання 2 рази на місяць. Загалом дуже задоволена - квартира завжди чистенька, використовують якісні екологічні засоби, що важливо з маленькою дитиною. Єдиний недолік - іноді запізнюються на 15-20 хвилин, але завжди попереджають про це. В цілому рекомендую сервіс!',

    'After renovation, there was just terrible dirt in the apartment - dust, putty, paint everywhere. I thought it would take a week to clean. But the guys managed in one day! They took out all construction waste, washed all surfaces, even wiped off paint stains from laminate. They used special means for post-renovation cleaning. The result is impressive - the apartment is like from a magazine!': 'Після ремонту в квартирі був просто жахливий бруд - пил, шпаклівка, фарба скрізь. Думав, що прибиратимуться тиждень. Але хлопці впорались за один день! Винесли весь будівельний сміття, відмили всі поверхні, навіть відтерли плями фарби з ламінату. Використовували спеціальні засоби для післяремонтного прибирання. Результат вражає - квартира як з журналу!',

    'We have been servicing our grocery store for six months. Always clean and tidy. It is especially important that they clean after closing - they do not disturb customers. They use disinfectants, which is very important for grocery trade. The staff is very responsible - there have never been any complaints. Very satisfied with the cooperation!': 'Обслуговуємо наш продуктовий магазин вже півроку. Завжди чисто та акуратно. Особливо важливо, що прибирають після закриття - не заважають клієнтам. Використовують дезінфікуючі засоби, що дуже важливо для продуктової торгівлі. Персонал дуже відповідальний - ніколи не було скарг. Дуже задоволені співпрацею!',

    'Ordered cleaning of a three-room apartment. Everything was great, fast and high quality. I was especially impressed that they cleaned the balcony even though I didn\'t ask for it. The only thing - they forgot to wipe the dust from the top shelves, but when I called, they came in an hour and fixed everything. Thank you for the responsible approach!': 'Замовляв прибирання трикімнатної квартири. Все сподобалось, швидко та якісно. Особливо вразило те, що прибрали навіть балкон, хоча я про це не просив. Єдине - забули витерти пил з верхніх полиць, але коли я подзвонив, приїхали через годину та все виправили. Дякую за відповідальний підхід!',

    'Ordered dry cleaning of sofa and armchairs. The result is simply amazing! The furniture looks like new. They removed old wine and coffee stains that I already considered irreversible. They used special equipment and safe products. The smell is pleasant, not sharp. I will definitely order again for carpets.': 'Замовляла хімчістку дивану та крісел. Результат просто вражаючий! Меблі виглядають як нові. Вивели старі плями від вина та кави, які я вже вважала безповоротними. Використовували спеціальну техніку та безпечні засоби. Запах приємний, не різкий. Обов\'язково буду замовляти ще для килимів.',

    'I have been using the office cleaning services for the second year now. Very convenient - we sign a contract, they come every Friday after 6 PM, and on Monday we come to a clean office. During this time there have never been any problems - everything is always high quality and on time. I especially like that they use eco-friendly products.': 'Вже другий рік користуюсь послугами регулярного прибирання офісу. Дуже зручно - укладаємо договір, вони приходять кожну п\'ятницю після 18:00, і в понеділок ми приходимо в чистий офіс. За цей час ніколи не було проблем - все завжди якісно та вчасно. Особливо подобається, що використовують екологічні засоби.',

    'Ordered cleaning after a children\'s party. The children spilled juice on the sofa, scattered crackers everywhere. The cleaners not only washed everything, but also put the toys back in their places! It\'s very nice that they treat things carefully. They used child-safe products. Now only to you!': 'Замовляла прибирання після вечірки з дітьми. Діти розлили сік на диван, розкидали крекери скрізь. Прибиральниці не лише все вимили, але й розклали іграшки по місцях! Дуже приємно, що ставляться до речей бережно. Використовували засоби, безпечні для дітей. Тепер тільки до вас!',

    'Ordered window washing for an office building. They worked at height, everything was safe, with insurance. The windows were washed well, but some had small streaks. When I pointed it out, they came the next day and rewashed them. Generally satisfied, the price is adequate for such a complex object.': 'Замовляв миття вікон у офісній будівлі. Працювали на висоті, все безпечно, з страхуванням. Вікна вимили якісно, але на деяких залишились невеликі розводи. Коли я звернув увагу, приїхали наступного дня та перемили. Загалом задоволений, ціна адекватна за такий складний об\'єкт.',

    'Very grateful for cleaning my apartment after renting it out. The tenants left a terrible mess, but your staff brought everything to perfect condition! They took out the trash, cleaned the kitchen, bathroom, and even restored the shine to the sink. Now I only rent with the condition that you do the cleaning after tenants.': 'Дуже вдячна за прибирання моєї квартири після здачі в оренду. Оренатарі залишили жахливий безлад, але ваші співробітники привели все в ідеальний стан! Винесли сміття, відмили кухню, ванну, навіть відновили блиск раковині. Тепер здаю квартиру тільки з умовою, що прибирання після орендарів робите ви.',

    'Ordered restaurant cleaning. Large area, many hard-to-reach places. The staff worked all night, and by opening everything was perfectly clean! I was especially impressed by the cleanliness of the ventilation grilles and under the equipment. Very professional approach. We plan to sign a contract for regular maintenance.': 'Замовляв прибирання ресторану. Велика площа, багато важкодоступних місць. Персонал працював цілу ніч, і до відкриття все було ідеально чисто! Особливо вразила чистота у вентиляційних решітках та під обладнанням. Дуже професійний підхід. Плануємо укласти договір на постійне обслуговування.',

    'Ordered apartment disinfection after the whole family was sick. They arrived at the specified time, did everything well, used professional disinfectants. The smell quickly dissipated. We feel safer. Thank you for the quick departure and quality work!': 'Замовляла дезінфекцію квартири після того, як перехворіла вся родина. Приїхали в зазначений час, все зробили якісно, використовували професійні дезінфікуючі засоби. Запах швидко вивітрився. Відчуваємо себе безпечніше. Дякую за швидкий виїзд та якісну роботу!',

    'Ordered cleaning of a two-story cottage. Large territory, many complex zones. They did well, but slightly damaged one vase when rearranging. However, they immediately admitted the mistake and reimbursed the cost. I like the honest approach. Generally satisfied with the work.': 'Замовляв прибирання двоповерхового котеджу. Велика територія, багато складних зон. Впорались добре, але дещо пошкодили одну вазу при перестановці. Однак відразу визнали помилку та відшкодували вартість. Подобається чесний підхід. Загалом роботою задоволений.',

    'I have been using the services for over a year! They come every two weeks and clean my two-room apartment. Very convenient - I take care of the child, and the apartment is always clean. I especially like that they use hypoallergenic products. The staff is very polite, always comes at the specified time.': 'Користуюсь послугами вже більше року! Раз на два тижні приходять, прибирають мою двокімнатну квартиру. Дуже зручно - я займаюсь дитиною, а квартира завжди чистенька. Особливо подобається, що використовують гіпоалергенні засоби. Персонал дуже ввічливий, завжди приходять в зазначений час.',

    'Ordered warehouse cleaning. Lots of dust, hard-to-reach corners. The guys worked in protective masks and used industrial vacuum cleaners. Excellent result! In one day they cleaned what we couldn\'t clean for months. Highly recommended for complex objects!': 'Замовляв прибирання складського приміщення. Дуже багато пилу, важкодоступні кути. Хлопці працювали у захисних масках, використовували промислові пилососи. Результат відмінний! За один день прибрали те, що ми не могли прибрати місяцями. Дуже рекомендую для складних об\'єктів!',

    'Very satisfied with the work! Ordered spring general cleaning. They washed all the windows, cabinets, sorted things out, even wiped the dust from the chandelier. The apartment is sparkling! I especially like that they don\'t use strong-smelling products - I have allergies, but everything is fine. Thank you for caring about customers!': 'Дуже задоволена роботою! Замовляла весняне генеральне прибирання. Вимили всі вікна, шафи, перебрали речі, навіть витерли пил з люстри. Квартира задихала! Особливо подобається, що не використовують різко пахнучі засоби - у мене алергія, але все гаразд. Дякую за турботу про клієнтів!',

    'Ordered auto repair shop cleaning. Complex object - grease, dust, metal shavings. They did well, but couldn\'t remove all the oil stains. Generally satisfied, the price is fair. Next time we\'ll try with preliminary chemical treatment of heavy contaminants.': 'Замовляв прибирання автомайстерні. Складний об\'єкт - мастило, пил, металева стружка. Впорались добре, але не всі масляні плями змогли вивести. Загалом задоволений, ціна справедлива. Наступного разу спробуємо з попередньою хімобробкою важких забруднень.',

    'Ordered pool and surrounding area cleaning. Very professional approach to the matter! They used special equipment for pool cleaning, cleaned the entire area, washed the sun loungers. The pool is sparkling! Highly recommended for country houses and cottages.': 'Замовляла прибирання басейну та прилеглої території. Дуже професійно підійшли до справи! Використовували спеціальне обладнання для чистки басейну, прибрали всю територію, вимили шезлонги. Тепер басейн сяє! Дуже рекомендую для заміських будинків та котеджів.',

    'We have been servicing our fitness center for 6 months. It is very important to maintain cleanliness in such establishments. Your staff is doing great - always clean in locker rooms, showers, gyms. They use powerful disinfectants. Customers note the cleanliness. Thank you!': 'Обслуговуємо наш фітнес-центр вже 6 місяців. Дуже важливо підтримувати чистоту в таких закладах. Ваш персонал чудово справляється - завжди чисто в роздягальнях, душах, тренажерних залах. Використовують потужні дезінфікуючі засоби. Клієнти відмічають чистоту. Дякуємо!',

    'Thank you for the wonderful pre-New Year cleaning! The apartment is sparkling, all corners are washed, windows are clean. I especially like that the cleaners are very attentive to details - they put all the New Year decorations in place, beautifully arranged the holiday service. Created a real holiday atmosphere!': 'Дякую за чудове прибирання перед новим роком! Квартира сяє, всі куточки вимиті, вікна чисті. Особливо подобається, що прибиральниці дуже уважні до деталей - розклали всі новорічні прикраси по місцях, красиво розмістили святковий сервіз. Створили справжню святкову атмосферу!',

    'Ordered office cleaning after moving. Many boxes, dust, clutter. They did well, but were somewhat late starting work. However, they compensated for this by working later. Generally satisfied - the office is now clean and cozy. I recommend!': 'Замовляв прибирання офісу після переїзду. Багато коробок, пилу, безладу. Впорались добре, але дещо запізнилися з початком роботи. Однак компенсували це роботою пізніше. Загалом задоволений - офіс тепер чистий та затишний. Рекомендую!',

    'I have been using your services for the third year! Constant cleaning service for my beauty salon. It is very important to maintain perfect cleanliness. Your staff are true professionals! They know all the features of working in a cosmetology office and use the right disinfectants.': 'Користуюсь вашими послугами вже третій рік! Постійне клінінгове обслуговування мого салону краси. Дуже важливо підтримувати ідеальну чистоту. Ваш персонал - справжні професіонали! Знають всі особливості роботи в косметологічному кабінеті, використовують правильні дезінфікуючі засоби.',

    'Ordered cleaning of a large warehouse complex. Area over 2000 m²! Your team did an excellent job. They worked in several shifts and used industrial equipment. The result exceeded expectations! Since then we have signed a contract for regular maintenance. Very satisfied with the cooperation!': 'Замовляв прибирання великого складського комплексу. Площа понад 2000 м²! Ваша команда впоралась відмінно. Працювали в кілька змін, використовували промислове обладнання. Результат перевершив очікування! З того часу уклали договір на регулярне обслуговування. Дуже задоволений співпрацею!',

    'Fifth year using your services for cleaning my apartment. During this time there have never been any complaints! The staff is always polite, professional, comes at the specified time. I especially appreciate that they remember my preferences regarding cleaning products. Thank you for the quality service!': 'П\'ятий рік користуюсь вашими послугами для прибирання моєї квартири. За цей час ніколи не було нарікань! Персонал завжди ввічливий, професійний, приходить в зазначений час. Особливо ціную те, що пам\'ятають про мої побажання щодо засобів для прибирання. Дякую за якісний сервіс!',

    'We have been servicing our pharmacy chain for over 5 years! Very responsible approach, always perfect cleanliness, which is very important for the pharmaceutical business. The staff has undergone special training for working in pharmacies. Thank you for long-term and quality cooperation!': 'Обслуговуємо нашу мережу аптек вже більше 5 років! Дуже відповідальний підхід, завжди ідеальна чистота, що дуже важливо для фармацевтичного бізнесу. Персонал пройшов спеціальне навчання для роботи в аптеках. Дякуємо за довгострокову та якісну співпрацю!',

    'Seven years ago I first ordered cleaning from you, and since then only to you! During this time I have used various services - from regular cleaning to carpet dry cleaning. Everything is always at a high level! I especially appreciate the stability of quality - in 7 years I have never been disappointed. Thank you!': 'Сім років тому вперше замовила прибирання у вас, і з того часу тільки до вас! За цей час користувалась різними послугами - від регулярного прибирання до хімчістки килимів. Завжди все на високому рівні! Особливо ціную стабільність якості - за 7 років жодного разу не розчарувалась. Дякую!',

    'Eighth year of cooperation with your company for servicing our business center. During this time there have never been any serious complaints. Your staff are true professionals! They know how to work with different types of coatings and know the features of commercial real estate objects. We recommend to everyone!': 'Восьмий рік співпрацюємо з вашою компанією для обслуговування нашого бізнес-центру. За цей час ніколи не було серйозних скарг. Ваш персонал - справжні професіонали! Вміють працювати з різними типами покриттів, знають особливості об\'єктів комерційної нерухомості. Рекомендуємо всім!',

    'Ten years ago, when you were just starting, I became your first client. And all this time I have never regretted my choice! I watch you grow and improve. Always quality service, pleasant prices and excellent staff. Thank you for long and happy cooperation!': 'Десять років тому, коли ви тільки починали, я стала вашим першим клієнтом. І за весь цей час ніколи не шкодувала про свій вибір! Спостерігаю, як ви росте та вдосконалюєтесь. Завжди якісний сервіс, приємні ціни та відмінний персонал. Дякую за довгу та щасливу співпрацю!',

    'One of the first clients of your company! I remember how 10 years ago you cleaned my new apartment after construction. Since then only to you! Over the years I have used almost all services - from regular cleaning to office maintenance. Always at the highest level! I wish you success and development!': 'Один з перших клієнтів вашої компанії! Пам\'ятаю, як 10 років тому ви прибирали мою нову квартиру після будівництва. З того часу тільки до вас! За ці роки користувався майже всіма послугами - від регулярного прибирання до обслуговування офісу. Завжди на висоті! Бажаю успіхів та розвитку!',

    // Кнопка
    'Show more reviews': 'Показати ще відгуки',
 

            // Про нас
            'Professional Approach': 'Професійний підхід',
            'Fast and Quality': 'Швидко та якісно',
            'Quality Guarantee': 'Гарантія якості',
            'Ecologically Clean': 'Екологічно чисто',
            'We are a team of professionals with many years of experience in cleaning. We use only certified products and modern equipment.': 'Ми - команда професіоналів з багаторічним досвідом у клінінгу. Використовуємо тільки сертифіковані засоби та сучасне обладнання.',
            'We clean quickly without losing quality. Average apartment cleaning time is 2-4 hours.': 'Прибираємо швидко без втрати якості. Середній час прибирання квартири - 2-4 години.',
            'We provide a guarantee for all types of work. If you don\'t like something - we\'ll fix it for free!': 'Надаємо гарантію на всі види робіт. Якщо щось не подобається - виправимо безкоштовно!',
            'We use eco-friendly products that are safe for children and pets.': 'Використовуємо екологічні засоби, безпечні для дітей та домашніх улюбленців.',
            'satisfied clients': 'задоволених клієнтів',
            'years of experience': 'роки досвіду',
            'support': 'підтримка',
            'quality guarantee': 'гарантія якості',

            // Наші клієнти
            
             
             '🏢 Trusted by': '🏢 Нам довіряють',
            
            'We cooperate with leading companies of Dnipro and Ukraine': 'Ми співпрацюємо з провідними компаніями Дніпра та України',
            'Hypermarket chain': 'Мережа гіпермаркетів',
            'Regular client': 'Постійний клієнт',
            'Retail network': 'Торгова мережа',
            'Weekly service': 'Щотижневе обслуговування',
            'Store network': 'Мережа магазинів',
            'Regular cleaning': 'Регулярне прибирання',
            'Hypermarket': 'Гіпермаркет',
            'Commercial cleaning': 'Комерційне прибирання',
            'Energy company': 'Енергетична компанія',
            'Office cleaning': 'Офісне прибирання',
            'Manufacturing enterprise': 'Виробниче підприємство',
            'Industrial cleaning': 'Промислове прибирання',
            'Postal service': 'Поштова служба',
            'Government institution': 'Державна установа',
            'Banking institution': 'Банківська установа',
            'IT office': 'IT-офіс',
            'Online store': 'Інтернет-магазин',
            'Warehouse premises': 'Складські приміщення',
            'corporate clients': 'корпоративних клієнтів',
            'continue cooperation': 'продовжують співпрацю',
            'business support': 'підтримка для бізнесу',
            'Become part of our client base today!': 'Станьте частиною нашої клієнтської бази вже сьогодні!',
            '🏢 Order for Business': '🏢 Замовити для бізнесу',

            // Типи робіт
            'We offer a full range of cleaning services for your comfort': 'Ми пропонуємо повний спектр клінінгових послуг для вашого комфорту',
            'Daily Cleaning': 'Щоденне прибирання',
            'Vacuuming floors and carpets': 'Пилосос підлоги та килимів',
            'Dusting surfaces': 'Протирання пилу з поверхонь',
            'Floor washing': 'Миття підлоги',
            'Mirror cleaning': 'Чистка дзеркал',
            'Bathroom cleaning': 'Прибирання санвузла',
            'from 500 UAH': 'від 500 грн',
            '📋 Details': '📋 Детальніше',
            'General Cleaning': 'Генеральне прибирання',
            'Window and windowsill washing': 'Миття вікон та підвіконь',
            'Furniture cleaning from inside': 'Чистка меблів зсередини',
            'Chandelier and lamp washing': 'Миття люстр та світильників',
            'Radiator cleaning': 'Чистка радіаторів опалення',
            'Wardrobe and dresser cleaning': 'Прибирання шаф та комодів',
            'from 1500 UAH': 'від 1500 грн',
            'Post-renovation Cleaning': 'Післяремонтне прибирання',
            'Construction waste removal': 'Винесення будівельного сміття',
            'Construction dust removal': 'Видалення будівельного пилу',
            'Window cleaning from dirt': 'Миття вікон від забруднень',
            'Ventilation system cleaning': 'Чистка систем вентиляції',
            'Final washing of all surfaces': 'Фінальне миття всіх поверхонь',
            'from 2000 UAH': 'від 2000 грн',
            'Office Cleaning': 'Офісне прибирання',
            'Daily/weekly service': 'Щоденне/щотижневе обслуговування',
            'Workplace cleaning': 'Прибирання робочих місць',
            'Bathroom and kitchen washing': 'Миття санвузлів та кухонь',
            'Trash removal and bag replacement': 'Винос сміття та заміна пакетів',
            'Door handle disinfection': 'Дезінфекція дверних ручок',
            'from 800 UAH/month': 'від 800 грн/міс',
            'Furniture Dry Cleaning': 'Хімчистка меблів',
            'Sofa and chair dry cleaning': 'Хімчистка диванів та крісел',
            'Chair and pouf cleaning': 'Чистка стільців та пуфів',
            'Difficult stain removal': 'Видалення складних плям',
            'Mattress cleaning': 'Чистка матраців',
            'Fabric refreshment': 'Освіження тканин',
            'from 700 UAH': 'від 700 грн',
            'Car Cleaning': 'Прибирання авто',
            'Interior vacuuming': 'Пилосос салону',
            'Glass and mirror washing': 'Миття скла та дзеркал',
            'Dashboard and panel cleaning': 'Чистка торпедо та панелі',
            'Mat washing': 'Миття ковриків',
            'Interior deodorization': 'Дезодорація салону',
            'from 400 UAH': 'від 400 грн',

            // До/Після
            '✨ Results That Speak for Themselves': '✨ Результати, які говорять самі за себе',
            'See how we transform spaces': 'Подивіться, як ми перетворюємо простір',
            'transformed premises': 'перетворених приміщень',
            'satisfied clients': 'задоволених клієнтів',
            '🏗️ General Cleaning': '🏗️ Генеральне прибирання',
            'Apartment after renovation': 'Квартира після ремонту',
            'Before cleaning': 'До прибирання',
            'After cleaning': 'Після прибирання',
            'RESULT': 'РЕЗУЛЬТАТ',
            'Construction dust': 'Будівельний пил',
            'Paint stains': 'Фарбові плями',
            'Material residues': 'Залишки матеріалів',
            'Perfect cleanliness': 'Ідеальна чистота',
            'No dust': 'Відсутність пилу',
            'Ready for living': 'Готово до проживання',
            '🏢 Office Cleaning': '🏢 Офісне прибирання',
            'Business center': 'Бізнес-центр',
            'Scattered documents': 'Розкидані документи',
            'Coffee stains': 'Плями від кави',
            'Dust on equipment': 'Пиль на техніці',
            'Professional look': 'Професійний вигляд',
            'Pleasant atmosphere': 'Приємна атмосфера',
            'Productivity increase': 'Підвищення продуктивності',
            '🛋️ Furniture Dry Cleaning': '🛋️ Хімчистка меблів',
            'Sofa after cleaning': 'Диван після очищення',
            'Before cleaning': 'До очищення',
            'After cleaning': 'Після очищення',
            'Wine stains': 'Плями від вина',
            'Food stains': 'Заляпання їжею',
            'Animal hair': 'Шерсть тварин',
            'Like new': 'Як новий',
            'Fresh look': 'Свіжий вигляд',
            'Pleasant to use': 'Приємно користуватися',
            'Dirty renovation': 'Брудний ремонт',
            'Clean apartment': 'Чиста квартира',
            'Dirty office': 'Брудний офіс',
            'Clean office': 'Чистий офіс',
            'Dirty sofa': 'Брудний диван',
            'Clean sofa': 'Чистий диван',
            'Want the same result? We will make your space perfectly clean!': 'Хочете такий же результат? Ми зробимо ваше приміщення ідеально чистим!',
            '🚀 Order Cleaning': '🚀 Замовити прибирання',

            

            // Калькулятор
            '🧮 Cleaning Cost Calculator': '🧮 Калькулятор вартості прибирання',
            'Cleaning type:': 'Тип прибирання:',
            'Regular cleaning': 'Звичайне прибирання',
            'General cleaning': 'Генеральне прибирання',
            'Post-renovation cleaning': 'Післяремонтне прибирання',
            'Commercial cleaning': 'Комерційне прибирання',
            'Room area (m²):': 'Площа приміщення (м²):',
            'Frequency:': 'Періодичність:',
            'One-time': 'Одноразове',
            'Weekly (-10%)': 'Щотижня (-10%)',
            '2 times per month (-15%)': '2 рази на місяць (-15%)',
            'Monthly (-20%)': 'Щомісяця (-20%)',
            'Additional services:': 'Додаткові послуги:',
            'Window washing (+200 UAH)': 'Миття вікон (+200 грн)',
            'Refrigerator cleaning (+150 UAH)': 'Чистка холодильника (+150 грн)',
            'Oven cleaning (+250 UAH)': 'Чистка духовки (+250 грн)',
            'Wardrobe cleaning (+180 UAH)': 'Чистка шаф (+180 грн)',
            'Balcony cleaning (+300 UAH)': 'Прибирання балкона (+300 грн)',
            'Calculate Cost': 'Розрахувати вартість',
            'Estimated cost:': 'Орієнтовна вартість:',
            'Select cleaning parameters for calculation': 'Оберіть параметри прибирання для розрахунку',
            '* Check exact cost with manager': '* Точну вартість уточнюйте у менеджера',

            // Контакти
            '🚀 Order Cleaning Today!': '🚀 Замовляйте прибирання вже сьогодні!',
            'Contact us for a free consultation and cost calculation': 'Зв\'яжіться з нами для безкоштовної консультації та розрахунку вартості',
            'Phones': 'Телефони',
            'Phones:': 'Телефони:',
            'Write in Viber': 'Написати у Viber',
            'Telegram': 'Telegram',
            'Quick response': 'Швидка відповідь',
            'Instagram': 'Instagram',
            'Our works': 'Наші роботи',
            'Facebook': 'Facebook',
            'View': 'Переглянути',
            'Reviews': 'Відгуки',
            'Working hours': 'Графік роботи',
            'Mon-Sun: 8:00 - 20:00': 'Пн-Нд: 8:00 - 20:00',
            'No days off': 'Без вихідних',
            '📞 Call Now': '📞 Передзвонити зараз',
            '💬 Write in Telegram': '💬 Написати в Telegram',
            '📞 Order Cleaning': '📞 Замовити прибирання',

            // Сертифікати
            'OUR QUALITY CERTIFICATES': 'НАШІ СЕРТИФІКАТИ ЯКОСТІ',
            'Professional approach - guarantee of your space cleanliness': 'Професійний підхід - гарантія чистоти вашого простору',
            'PLATINUM CERTIFICATE': 'ПЛАТИНОВИЙ СЕРТИФІКАТ',
            'Highest level of cleaning service quality': 'Найвищий рівень якості клінінгових послуг',
            'Valid until:': 'Дійсний до:',
            'ECO-CERTIFICATE': 'ЕКО-СЕРТИФІКАТ',
            'Use of premium biodegradable products': 'Використання преміум біорозкладних засобів',
            'SAFETY CERTIFICATE': 'СЕРТИФІКАТ БЕЗПЕКИ',
            'Complete confidentiality and quality guarantee': 'Повна конфіденційність та гарантія якості',
            'PROFESSIONAL STATUS': 'ПРОФЕСІЙНИЙ СТАТУС',
            'Elite premium class cleaning service': 'Елітний клінінг сервіс преміум класу',
            'OUR LOCATION': 'НАШЕ МІСЦЕЗНАХОДЖЕННЯ',
            'Come visit us - we\'re always happy to see you!': 'Приїжджайте до нас - ми завжди раді вас бачити!',
            '🗺️ GOOGLE MAPS': '🗺️ КАРТА GOOGLE MAPS',
            'PREMIUM SERVICE': 'ПРЕМІУМ СЕРВІС',
            'QUICK DEPARTURE': 'ШВИДКИЙ ВИЇЗД',
            'QUALITY GUARANTEE': 'ГАРАНТІЯ ЯКОСТІ',
            'OPEN IN GOOGLE MAPS': 'ВІДКРИТИ В GOOGLE MAPS',

             // Футер
            'Social networks:': 'Соцмережі:',
            '&copy; 2025 Uberu. All rights reserved.': '&copy; 2025 Уберу. Всі права захищені.',





			// Модальні вікна типів робіт
        'Daily Cleaning': 'Щоденне прибирання',
        'Perfect cleanliness every day': 'Ідеальна чистота кожного дня',
        'Regular professional cleaning to maintain perfect cleanliness in your home. Our approach guarantees a healthy environment and saves your time for important things.': 'Регулярне професійне прибирання для підтримання ідеальної чистоти у вашому домі. Наш підхід гарантує здорове середовище та економить ваш час для важливих речей.',
        'General Cleaning': 'Генеральне прибирання',
        'Comprehensive space renewal': 'Комплексне оновлення простору',
        'Deep comprehensive cleaning of every corner of your home. We use industrial vacuum cleaners, steam cleaners and professional chemicals for perfect results.': 'Глибоке комплексне прибирання кожного куточка вашого помешкання. Використовуємо промислові пилососи, парові очищувачі та професійну хімію для ідеального результату.',
        'Post-Renovation Cleaning': 'Післяремонтне прибирання',
        'Cleanliness after construction work': 'Чистота після будівельних робіт',
        'Specialized cleaning after renovation using industrial vacuum cleaners and construction chemicals. We remove dust, paint, glue and restore perfect appearance.': 'Спеціалізоване прибирання після ремонту з використанням промислових пилососів та будівельної хімії. Видаляємо пил, фарбу, клей та повертаємо ідеальний вигляд.',
        'Office Cleaning': 'Офісне прибирання',
        'Professional business service': 'Професійне обслуговування бізнесу',
        'Comprehensive maintenance of office premises using quiet equipment. We work outside business hours without interfering with business processes.': 'Комплексне обслуговування офісних приміщень з використанням тихого обладнання. Працюємо в неробочий час, не заважаючи бізнес-процесам.',
        'Furniture Dry Cleaning': 'Хімчистка меблів',
        'Furniture restoration and refreshment': 'Відновлення та освіження меблів',
        'Professional furniture dry cleaning using European safe products. We use extraction equipment for deep fabric cleaning.': 'Професійна хімчистка меблів з використанням європейських безпечних засобів. Використовуємо екстракційне обладнання для глибокого очищення тканин.',
        'Car Cleaning': 'Прибирання авто',
        'Professional interior cleaning': 'Професійна чистка салону',
        'Comprehensive car interior cleaning using professional equipment. We use steam generators, vacuum cleaners and special auto chemicals.': 'Комплексне прибирання салону автомобіля з використанням професійного обладнання. Використовуємо парогенератори, пилососи та спеціальну автохімію.',
        
        // Переваги для модальних вікон
        'Time saving': 'Економія часу',
        'Healthy environment': 'Здорове середовище',
        'Regularity': 'Регулярність',
        'Professional approach': 'Професійний підхід',
        'Detailed cleaning': 'Детальне очищення',
        'Complete renewal': 'Повне оновлення',
        'Perfect result': 'Ідеальний результат',
        'Hygiene and health': 'Гігієна та здоров\'я',
        'Specialized equipment': 'Спеціалізоване обладнання',
        'Removal of construction dust': 'Видалення будівельного пилу',
        'Quality guarantee': 'Гарантія якості',
        'Ready for occupancy': 'Готовність до заселення',
        'Professional image': 'Професійний імідж',
        'Comfort for employees': 'Комфорт для співробітників',
        'Flexible schedule': 'Гнучкий графік',
        'Constant support': 'Постійна підтримка',
        'Furniture restoration': 'Відновлення меблів',
        'Eco-friendly products': 'Екологічні засоби',
        'Antibacterial treatment': 'Антибактеріальна обробка',
        'Color preservation': 'Збереження кольору',
        'Air refreshment': 'Освіження повітря',
        'Deep cleaning': 'Глибока чистка',
        'Premium quality': 'Якість преміум-класу',




            // Модальні вікна
            'Site Settings': 'Налаштування сайту',
            'Customize the appearance and functionality of the site to your preferences.': 'Налаштуйте зовнішній вигляд та функціонал сайту під ваші уподобання.',
            '🎨 Available settings:': '🎨 Доступні налаштування:',
            '🔧 Functions:': '🔧 Функції:',
            '🔄 Reset Settings': '🔄 Скинути налаштування',
            '💾 Save Changes': '💾 Зберегти зміни',
            '🌐 EN/UA': '🌐 UA/EN',
            '🎨 Simplify Slider': '🎨 Спростити слайдер',
            '✨ Epic Slider': '✨ Епічний слайдер',
            '👁️ Hide "Before/After"': '👁️ Приховати "До/Після"',
            '👁️ Show "Before/After"': '👁️ Показати "До/Після"',
            '🔄 Reset All': '🔄 Скинути все',
            '💾 Save': '💾 Зберегти',
            'About Our Site': 'Про наш сайт',
            'Site description...': 'Опис сайту...',
            '🚀 Site Functionality:': '🚀 Функціонал сайту:',
            '💻 Technologies:': '💻 Технології:',
            '👍 Thank you, understood': '👍 Дякую, зрозуміло',
            'Service Name': 'Назва послуги',
            'from 500 UAH': 'від 500 грн',
            'Professional approach - quality guarantee': 'Професійний підхід - гарантія якості',
            'Detailed service description...': 'Детальний опис послуги...',
            '📋 What\'s included in the service:': '📋 Що входить у послугу:',
            '🎯 Service Benefits': '🎯 Переваги послуги',
            '🧮 Calculate Cost': '🧮 Розрахувати вартість',
            '📞 Order Consultation': '📞 Замовити консультацію',
            'Certificate': 'Сертифікат',
            '🏆 First Slide': '🏆 Перший слайд',
            'This is the first slide with swipe effect': 'Це перший слайд з ефектом перелистування',
            '⭐ Second Slide': '⭐ Другий слайд',
            'Continue viewing the next slide': 'Продовжуємо перегляд наступного слайду',
            '🎯 Third Slide': '🎯 Третій слайд',
            'Last slide in our presentation': 'Останній слайд у нашій презентації',

            // Прелоадер
            'Uberu': 'Уберу',
            'Professional Cleaning': 'Професійний клінінг'
        },
        en: {
            // Герой секція
            'Професійний клінінг': 'Professional Cleaning',
            'у Дніпрі': 'in Dnipro',
             'Не вистачає часу на спілкування з близькими?Довірте прибирання професіоналам!': 'Not enough time to communicate with loved ones? Entrust cleaning to professionals!',
            '🔄 Розрахувати вартість': '🔄 Calculate Cost',
            '📞 Замовити дзвінок': '📞 Request a Call',
            'Прокрутіть нижче': 'Scroll Down',

            // Навігація
            '👨‍💼 Про нас': '👨‍💼 About Us',
            '🛠️ Типи робіт': '🛠️ Types of Work',
            '📸 Наші роботи': '📸 Our Works',
            '🧮 Калькулятор': '🧮 Calculator',
            '✨ Послуги': '✨ Services',
            '🏆 Переваги': '🏆 Advantages',
            '📞 Контакти': '📞 Contacts',
            '🔄 До/Після': '🔄 Before/After',
            '🏢 Наші клієнти': '🏢 Our Clients',
            '💬 Відгуки': '💬 Reviews',
            '📜 Сертифікати': '📜 Certificates',
            'Налаштування': 'Settings',
            'Про сайт': 'About Site',



    // Відгуки - імена (зворотні переклади)
    'Ірина Петренко': 'Iryna Petrenko',
    'Олександр Коваль': 'Oleksandr Koval',
    'Марія Сидоренко': 'Maria Sydorenko',
    'Сергій Іваненко': 'Serhiy Ivanenko',
    'Наталія Бойко': 'Nataliya Boyko',
    'Віктор Павленко': 'Viktor Pavlenko',
    'Тетяна Мельник': 'Tetiana Melnyk',
    'Андрій Шевченко': 'Andriy Shevchenko',
    'Оксана Лисенко': 'Oksana Lysenko',
    'Максим Гордієнко': 'Maksym Hordiyenko',
    'Юлія Савченко': 'Yuliya Savchenko',
    'Дмитро Бондаренко': 'Dmytro Bondarenko',
    'Анна Кравченко': 'Anna Kravchenko',
    'Павло Ткаченко': 'Pavlo Tkachenko',
    'Катерина Романенко': 'Kateryna Romanenko',
    'Василь Ковальчук': 'Vasyl Kovalchuk',
    'Лариса Шевчук': 'Larysa Shevchuk',
    'Ігор Пилипенко': 'Ihor Pylypenko',
    'Надія Білик': 'Nadiya Bilyk',
    'Роман Литвиненко': 'Roman Lytvynenko',
    'Світлана Гончаренко': 'Svitlana Honcharenko',
    'Артем Сич': 'Artem Sych',
    'Ольга Терещенко': 'Olga Tereshchenko',
    'Михайло Захарченко': 'Mykhaylo Zakharchenko',
    'Галина Семенюк': 'Halyna Semenyuk',
    'Володимир Броваренко': 'Volodymyr Brovarenko',
    'Тетяна Кушнір': 'Tetiana Kushnir',
    'Юрій Мельник': 'Yuriy Melnyk',
    'Людмила Панченко': 'Lyudmyla Panchenko',
    'Петро Шевченко': 'Petro Shevchenko',

    // Відгуки - тексти (зворотні переклади)
    'Замовляла генеральне прибирання після новорічних свят. Результат вражає! Квартира сяє чистотой. Особливо вразила увага до деталей - вимили навіть віконні рами та жалюзі. Персонал дуже ввічливий та професійний. Вже порекомендувала подругам та планую зробити регулярне прибирання постійним.': 'Ordered general cleaning after the New Year holidays. The result is impressive! The apartment shines with cleanliness. I was especially impressed by the attention to details - they even washed window frames and blinds. The staff is very polite and professional. I have already recommended to friends and plan to make regular cleaning permanent.',

    'Замовляв прибирання офісу площею 150 м² після корпоративу. Хлопці впорались просто відмінно! За 4 години прибрали всі сліди вечірки, винесли сміття, вимили підлоги, столи та навіть розставили всі документи по місцях. Дуже зручно, що працюють з ранку - о 9 вже все було готове. Ціна абсолютно адекватна за такий об\'єм роботи.': 'Ordered office cleaning of 150 m² after a corporate party. The guys did just great! In 4 hours they removed all traces of the party, took out the trash, washed floors, tables and even arranged all documents in their places. Very convenient that they work from the morning - by 9 everything was ready. The price is absolutely adequate for such amount of work.',

    'Скористалась послугою регулярного прибирання 2 рази на місяць. Загалом дуже задоволена - квартира завжди чистенька, використовують якісні екологічні засоби, що важливо з маленькою дитиною. Єдиний недолік - іноді запізнюються на 15-20 хвилин, але завжди попереджають про це. В цілому рекомендую сервіс!': 'Used the regular cleaning service 2 times a month. Generally very satisfied - the apartment is always clean, they use quality eco-friendly products, which is important with a small child. The only drawback - sometimes they are late for 15-20 minutes, but always warn about it. Overall I recommend the service!',

    'Після ремонту в квартирі був просто жахливий бруд - пил, шпаклівка, фарба скрізь. Думав, що прибиратимуться тиждень. Але хлопці впорались за один день! Винесли весь будівельний сміття, відмили всі поверхні, навіть відтерли плями фарби з ламінату. Використовували спеціальні засоби для післяремонтного прибирання. Результат вражає - квартира як з журналу!': 'After renovation, there was just terrible dirt in the apartment - dust, putty, paint everywhere. I thought it would take a week to clean. But the guys managed in one day! They took out all construction waste, washed all surfaces, even wiped off paint stains from laminate. They used special means for post-renovation cleaning. The result is impressive - the apartment is like from a magazine!',

    'Обслуговуємо наш продуктовий магазин вже півроку. Завжди чисто та акуратно. Особливо важливо, що прибирають після закриття - не заважають клієнтам. Використовують дезінфікуючі засоби, що дуже важливо для продуктової торгівлі. Персонал дуже відповідальний - ніколи не було скарг. Дуже задоволені співпрацею!': 'We have been servicing our grocery store for six months. Always clean and tidy. It is especially important that they clean after closing - they do not disturb customers. They use disinfectants, which is very important for grocery trade. The staff is very responsible - there have never been any complaints. Very satisfied with the cooperation!',

    'Замовляв прибирання трикімнатної квартири. Все сподобалось, швидко та якісно. Особливо вразило те, що прибрали навіть балкон, хоча я про це не просив. Єдине - забули витерти пил з верхніх полиць, але коли я подзвонив, приїхали через годину та все виправили. Дякую за відповідальний підхід!': 'Ordered cleaning of a three-room apartment. Everything was great, fast and high quality. I was especially impressed that they cleaned the balcony even though I didn\'t ask for it. The only thing - they forgot to wipe the dust from the top shelves, but when I called, they came in an hour and fixed everything. Thank you for the responsible approach!',

    'Замовляла хімчістку дивану та крісел. Результат просто вражаючий! Меблі виглядають як нові. Вивели старі плями від вина та кави, які я вже вважала безповоротними. Використовували спеціальну техніку та безпечні засоби. Запах приємний, не різкий. Обов\'язково буду замовляти ще для килимів.': 'Ordered dry cleaning of sofa and armchairs. The result is simply amazing! The furniture looks like new. They removed old wine and coffee stains that I already considered irreversible. They used special equipment and safe products. The smell is pleasant, not sharp. I will definitely order again for carpets.',

    'Вже другий рік користуюсь послугами регулярного прибирання офісу. Дуже зручно - укладаємо договір, вони приходять кожну п\'ятницю після 18:00, і в понеділок ми приходимо в чистий офіс. За цей час ніколи не було проблем - все завжди якісно та вчасно. Особливо подобається, що використовують екологічні засоби.': 'I have been using the office cleaning services for the second year now. Very convenient - we sign a contract, they come every Friday after 6 PM, and on Monday we come to a clean office. During this time there have never been any problems - everything is always high quality and on time. I especially like that they use eco-friendly products.',

    'Замовляла прибирання після вечірки з дітьми. Діти розлили сік на диван, розкидали крекери скрізь. Прибиральниці не лише все вимили, але й розклали іграшки по місцях! Дуже приємно, що ставляться до речей бережно. Використовували засоби, безпечні для дітей. Тепер тільки до вас!': 'Ordered cleaning after a children\'s party. The children spilled juice on the sofa, scattered crackers everywhere. The cleaners not only washed everything, but also put the toys back in their places! It\'s very nice that they treat things carefully. They used child-safe products. Now only to you!',

    'Замовляв миття вікон у офісній будівлі. Працювали на висоте, все безпечно, з страхуванням. Вікна вимили якісно, але на деяких залишились невеликі розводи. Коли я звернув увагу, приїхали наступного дня та перемили. Загалом задоволений, ціна адекватна за такий складний об\'єкт.': 'Ordered window washing for an office building. They worked at height, everything was safe, with insurance. The windows were washed well, but some had small streaks. When I pointed it out, they came the next day and rewashed them. Generally satisfied, the price is adequate for such a complex object.',

    'Дуже вдячна за прибирання моєї квартири після здачі в оренду. Оренатарі залишили жахливий безлад, але ваші співробітники привели все в ідеальний стан! Винесли сміття, відмили кухню, ванну, навіть відновили блиск раковині. Тепер здаю квартиру тільки з умовою, що прибирання після орендарів робите ви.': 'Very grateful for cleaning my apartment after renting it out. The tenants left a terrible mess, but your staff brought everything to perfect condition! They took out the trash, cleaned the kitchen, bathroom, and even restored the shine to the sink. Now I only rent with the condition that you do the cleaning after tenants.',

    'Замовляв прибирання ресторану. Велика площа, багато важкодоступних місць. Персонал працював цілу ніч, і до відкриття все було ідеально чисто! Особливо вразила чистота у вентиляційних решітках та під обладнанням. Дуже професійний підхід. Плануємо укласти договір на постійне обслуговування.': 'Ordered restaurant cleaning. Large area, many hard-to-reach places. The staff worked all night, and by opening everything was perfectly clean! I was especially impressed by the cleanliness of the ventilation grilles and under the equipment. Very professional approach. We plan to sign a contract for regular maintenance.',

    'Замовляла дезінфекцію квартири після того, як перехворіла вся родина. Приїхали в зазначений час, все зробили якісно, використовували професійні дезінфікуючі засоби. Запах швидко вивітрився. Відчуваємо себе безпечніше. Дякую за швидкий виїзд та якісну роботу!': 'Ordered apartment disinfection after the whole family was sick. They arrived at the specified time, did everything well, used professional disinfectants. The smell quickly dissipated. We feel safer. Thank you for the quick departure and quality work!',

    'Замовляв прибирання двоповерхового котеджу. Велика територія, багато складних зон. Впорались добре, але дещо пошкодили одну вазу при перестановці. Однак відразу визнали помилку та відшкодували вартість. Подобається чесний підхід. Загалом роботою задоволений.': 'Ordered cleaning of a two-story cottage. Large territory, many complex zones. They did well, but slightly damaged one vase when rearranging. However, they immediately admitted the mistake and reimbursed the cost. I like the honest approach. Generally satisfied with the work.',

    'Користуюсь послугами вже більше року! Раз на два тижні приходять, прибирають мою двокімнатну квартиру. Дуже зручно - я займаюсь дитиною, а квартира завжди чистенька. Особливо подобається, що використовують гіпоалергенні засоби. Персонал дуже ввічливий, завжди приходять в зазначений час.': 'I have been using the services for over a year! They come every two weeks and clean my two-room apartment. Very convenient - I take care of the child, and the apartment is always clean. I especially like that they use hypoallergenic products. The staff is very polite, always comes at the specified time.',

    'Замовляв прибирання складського приміщення. Дуже багато пилу, важкодоступні кути. Хлопці працювали у захисних масках, використовували промислові пилососи. Результат відмінний! За один день прибрали те, що ми не могли прибрати місяцями. Дуже рекомендую для складних об\'єктів!': 'Ordered warehouse cleaning. Lots of dust, hard-to-reach corners. The guys worked in protective masks and used industrial vacuum cleaners. Excellent result! In one day they cleaned what we couldn\'t clean for months. Highly recommended for complex objects!',

    'Дуже задоволена роботою! Замовляла весняне генеральне прибирання. Вимили всі вікна, шафи, перебрали речі, навіть витерли пил з люстри. Квартира задихала! Особливо подобається, що не використовують різко пахнучі засоби - у мене алергія, але все гаразд. Дякую за турботу про клієнтів!': 'Very satisfied with the work! Ordered spring general cleaning. They washed all the windows, cabinets, sorted things out, even wiped the dust from the chandelier. The apartment is sparkling! I especially like that they don\'t use strong-smelling products - I have allergies, but everything is fine. Thank you for caring about customers!',

    'Замовляв прибирання автомайстерні. Складний об\'єкт - мастило, пил, металева стружка. Впорались добре, але не всі масляні плями змогли вивести. Загалом задоволений, ціна справедлива. Наступного разу спробуємо з попередньою хімобробкою важких забруднень.': 'Ordered auto repair shop cleaning. Complex object - grease, dust, metal shavings. They did well, but couldn\'t remove all the oil stains. Generally satisfied, the price is fair. Next time we\'ll try with preliminary chemical treatment of heavy contaminants.',

    'Замовляла прибирання басейну та прилеглої території. Дуже професійно підійшли до справи! Використовували спеціальне обладнання для чистки басейну, прибрали всю територію, вимили шезлонги. Тепер басейн сяє! Дуже рекомендую для заміських будинків та котеджів.': 'Ordered pool and surrounding area cleaning. Very professional approach to the matter! They used special equipment for pool cleaning, cleaned the entire area, washed the sun loungers. The pool is sparkling! Highly recommended for country houses and cottages.',

    'Обслуговуємо наш фітнес-центр вже 6 місяців. Дуже важливо підтримувати чистоту в таких закладах. Ваш персонал чудово справляється - завжди чисто в роздягальнях, душах, тренажерних залах. Використовують потужні дезінфікуючі засоби. Клієнти відмічають чистоту. Дякуємо!': 'We have been servicing our fitness center for 6 months. It is very important to maintain cleanliness in such establishments. Your staff is doing great - always clean in locker rooms, showers, gyms. They use powerful disinfectants. Customers note the cleanliness. Thank you!',

    'Дякую за чудове прибирання перед новим роком! Квартира сяє, всі куточки вимиті, вікна чисті. Особливо подобається, що прибиральниці дуже уважні до деталей - розклали всі новорічні прикраси по місцях, красиво розмістили святковий сервіз. Створили справжню святкову атмосферу!': 'Thank you for the wonderful pre-New Year cleaning! The apartment is sparkling, all corners are washed, windows are clean. I especially like that the cleaners are very attentive to details - they put all the New Year decorations in place, beautifully arranged the holiday service. Created a real holiday atmosphere!',

    'Замовляв прибирання офісу після переїзду. Багато коробок, пилу, безладу. Впорались добре, але дещо запізнилися з початком роботи. Однак компенсували це роботою пізніше. Загалом задоволений - офіс тепер чистий та затишний. Рекомендую!': 'Ordered office cleaning after moving. Many boxes, dust, clutter. They did well, but were somewhat late starting work. However, they compensated for this by working later. Generally satisfied - the office is now clean and cozy. I recommend!',

    'Користуюсь вашими послугами вже третій рік! Постійне клінінгове обслуговування мого салону краси. Дуже важливо підтримувати ідеальну чистоту. Ваш персонал - справжні професіонали! Знають всі особливості роботи в косметологічному кабінеті, використовують правильні дезінфікуючі засоби.': 'I have been using your services for the third year! Constant cleaning service for my beauty salon. It is very important to maintain perfect cleanliness. Your staff are true professionals! They know all the features of working in a cosmetology office and use the right disinfectants.',

    'Замовляв прибирання великого складського комплексу. Площа понад 2000 м²! Ваша команда впоралась відмінно. Працювали в кілька змін, використовували промислове обладнання. Результат перевершив очікування! З того часу уклали договір на регулярне обслуговування. Дуже задоволений співпрацею!': 'Ordered cleaning of a large warehouse complex. Area over 2000 m²! Your team did an excellent job. They worked in several shifts and used industrial equipment. The result exceeded expectations! Since then we have signed a contract for regular maintenance. Very satisfied with the cooperation!',

    'П\'ятий рік користуюсь вашими послугами для прибирання моєї квартири. За цей час ніколи не було нарікань! Персонал завжди ввічливий, професійний, приходить в зазначений час. Особливо ціную те, що пам\'ятають про мої побажання щодо засобів для прибирання. Дякую за якісний сервіс!': 'Fifth year using your services for cleaning my apartment. During this time there have never been any complaints! The staff is always polite, professional, comes at the specified time. I especially appreciate that they remember my preferences regarding cleaning products. Thank you for the quality service!',

    'Обслуговуємо нашу мережу аптек вже більше 5 років! Дуже відповідальний підхід, завжди ідеальна чистота, що дуже важливо для фармацевтичного бізнесу. Персонал пройшов спеціальне навчання для роботи в аптеках. Дякуємо за довгострокову та якісну співпрацю!': 'We have been servicing our pharmacy chain for over 5 years! Very responsible approach, always perfect cleanliness, which is very important for the pharmaceutical business. The staff has undergone special training for working in pharmacies. Thank you for long-term and quality cooperation!',

    'Сім років тому вперше замовила прибирання у вас, і з того часу тільки до вас! За цей час користувалась різними послугами - від регулярного прибирання до хімчістки килимів. Завжди все на високому рівні! Особливо ціную стабільність якості - за 7 років жодного разу не розчарувалась. Дякую!': 'Seven years ago I first ordered cleaning from you, and since then only to you! During this time I have used various services - from regular cleaning to carpet dry cleaning. Everything is always at a high level! I especially appreciate the stability of quality - in 7 years I have never been disappointed. Thank you!',

    'Восьмий рік співпрацюємо з вашою компанією для обслуговування нашого бізнес-центру. За цей час ніколи не було серйозних скарг. Ваш персонал - справжні професіонали! Вміють працювати з різними типами покриттів, знають особливості об\'єктів комерційної нерухомості. Рекомендуємо всім!': 'Eighth year of cooperation with your company for servicing our business center. During this time there have never been any serious complaints. Your staff are true professionals! They know how to work with different types of coatings and know the features of commercial real estate objects. We recommend to everyone!',

    'Десять років тому, коли ви тільки починали, я стала вашим першим клієнтом. І за весь цей час ніколи не шкодувала про свій вибір! Спостерігаю, як ви росте та вдосконалюєтесь. Завжди якісний сервіс, приємні ціни та відмінний персонал. Дякую за довгу та щасливу співпрацю!': 'Ten years ago, when you were just starting, I became your first client. And all this time I have never regretted my choice! I watch you grow and improve. Always quality service, pleasant prices and excellent staff. Thank you for long and happy cooperation!',

    'Один з перших клієнтів вашої компанії! Пам\'ятаю, як 10 років тому ви прибирали мою нову квартиру після будівництва. З того часу тільки до вас! За ці роки користувався майже всіма послугами - від регулярного прибирання до обслуговування офісу. Завжди на висоті! Бажаю успіхів та розвитку!': 'One of the first clients of your company! I remember how 10 years ago you cleaned my new apartment after construction. Since then only to you! Over the years I have used almost all services - from regular cleaning to office maintenance. Always at the highest level! I wish you success and development!',

    // Кнопка
    'Показати ще відгуки': 'Show more reviews',



			   '🏢 Нам довіряють': '🏢 Trusted by',
			
            // Про нас
            'Професійний підхід': 'Professional Approach',
            'Швидко та якісно': 'Fast and Quality',
            'Гарантія якості': 'Quality Guarantee',
            'Екологічно чисто': 'Ecologically Clean',
            'Ми - команда професіоналів з багаторічним досвідом у клінінгу. Використовуємо тільки сертифіковані засоби та сучасне обладнання.': 'We are a team of professionals with many years of experience in cleaning. We use only certified products and modern equipment.',
            'Прибираємо швидко без втрати якості. Середній час прибирання квартири - 2-4 години.': 'We clean quickly without losing quality. Average apartment cleaning time is 2-4 hours.',
            'Надаємо гарантію на всі види робіт. Якщо щось не подобається - виправимо безкоштовно!': 'We provide a guarantee for all types of work. If you don\'t like something - we\'ll fix it for free!',
            'Використовуємо екологічні засоби, безпечні для дітей та домашніх улюбленців.': 'We use eco-friendly products that are safe for children and pets.',
            'задоволених клієнтів': 'satisfied clients',
            'роки досвіду': 'years of experience',
            'підтримка': 'support',
            'гарантія якості': 'quality guarantee',

            // Наші клієнти
            'Ми співпрацюємо з провідними компаніями Дніпра та України': 'We cooperate with leading companies of Dnipro and Ukraine',
            'Мережа гіпермаркетів': 'Hypermarket chain',
            'Постійний клієнт': 'Regular client',
            'Торгова мережа': 'Retail network',
            'Щотижневе обслуговування': 'Weekly service',
            'Мережа магазинів': 'Store network',
            'Регулярне прибирання': 'Regular cleaning',
            'Гіпермаркет': 'Hypermarket',
            'Комерційне прибирання': 'Commercial cleaning',
            'Енергетична компанія': 'Energy company',
            'Офісне прибирання': 'Office cleaning',
            'Виробниче підприємство': 'Manufacturing enterprise',
            'Промислове прибирання': 'Industrial cleaning',
            'Поштова служба': 'Postal service',
            'Державна установа': 'Government institution',
            'Банківська установа': 'Banking institution',
            'IT-офіс': 'IT office',
            'Інтернет-магазин': 'Online store',
            'Складські приміщення': 'Warehouse premises',
            'корпоративних клієнтів': 'corporate clients',
            'продовжують співпрацю': 'continue cooperation',
            'підтримка для бізнесу': 'business support',
            'Станьте частиною нашої клієнтської бази вже сьогодні!': 'Become part of our client base today!',
            '🏢 Замовити для бізнесу': '🏢 Order for Business',

            // Типи робіт
            'Ми пропонуємо повний спектр клінінгових послуг для вашого комфорту': 'We offer a full range of cleaning services for your comfort',
            'Щоденне прибирання': 'Daily Cleaning',
            'Пилосос підлоги та килимів': 'Vacuuming floors and carpets',
            'Протирання пилу з поверхонь': 'Dusting surfaces',
            'Миття підлоги': 'Floor washing',
            'Чистка дзеркал': 'Mirror cleaning',
            'Прибирання санвузла': 'Bathroom cleaning',
            'від 500 грн': 'from 500 UAH',
            '📋 Детальніше': '📋 Details',
            'Генеральне прибирання': 'General Cleaning',
            'Миття вікон та підвіконь': 'Window and windowsill washing',
            'Чистка меблів зсередини': 'Furniture cleaning from inside',
            'Миття люстр та світильників': 'Chandelier and lamp washing',
            'Чистка радіаторів опалення': 'Radiator cleaning',
            'Прибирання шаф та комодів': 'Wardrobe and dresser cleaning',
            'від 1500 грн': 'from 1500 UAH',
            'Післяремонтне прибирання': 'Post-renovation Cleaning',
            'Винесення будівельного сміття': 'Construction waste removal',
            'Видалення будівельного пилу': 'Construction dust removal',
            'Миття вікон від забруднень': 'Window cleaning from dirt',
            'Чистка систем вентиляції': 'Ventilation system cleaning',
            'Фінальне миття всіх поверхонь': 'Final washing of all surfaces',
            'від 2000 грн': 'from 2000 UAH',
            'Офісне прибирання': 'Office Cleaning',
            'Щоденне/щотижневе обслуговування': 'Daily/weekly service',
            'Прибирання робочих місць': 'Workplace cleaning',
            'Миття санвузлів та кухонь': 'Bathroom and kitchen washing',
            'Винос сміття та заміна пакетів': 'Trash removal and bag replacement',
            'Дезінфекція дверних ручок': 'Door handle disinfection',
            'від 800 грн/міс': 'from 800 UAH/month',
            'Хімчистка меблів': 'Furniture Dry Cleaning',
            'Хімчистка диванів та крісел': 'Sofa and chair dry cleaning',
            'Чистка стільців та пуфів': 'Chair and pouf cleaning',
            'Видалення складних плям': 'Difficult stain removal',
            'Чистка матраців': 'Mattress cleaning',
            'Освіження тканин': 'Fabric refreshment',
            'від 700 грн': 'from 700 UAH',
            'Прибирання авто': 'Car Cleaning',
            'Пилосос салону': 'Interior vacuuming',
            'Миття скла та дзеркал': 'Glass and mirror washing',
            'Чистка торпедо та панелі': 'Dashboard and panel cleaning',
            'Миття ковриків': 'Mat washing',
            'Дезодорація салону': 'Interior deodorization',
            'від 400 грн': 'from 400 UAH',

            // До/Після
            '✨ Результати, які говорять самі за себе': '✨ Results That Speak for Themselves',
            'Подивіться, як ми перетворюємо простір': 'See how we transform spaces',
            'перетворених приміщень': 'transformed premises',
            'задоволених клієнтів': 'satisfied clients',
            '🏗️ Генеральне прибирання': '🏗️ General Cleaning',
            'Квартира після ремонту': 'Apartment after renovation',
            'До прибирання': 'Before cleaning',
            'Після прибирання': 'After cleaning',
            'РЕЗУЛЬТАТ': 'RESULT',
            'Будівельний пил': 'Construction dust',
            'Фарбові плями': 'Paint stains',
            'Залишки матеріалів': 'Material residues',
            'Ідеальна чистота': 'Perfect cleanliness',
            'Відсутність пилу': 'No dust',
            'Готово до проживання': 'Ready for living',
            '🏢 Офісне прибирання': '🏢 Office Cleaning',
            'Бізнес-центр': 'Business center',
            'Розкидані документи': 'Scattered documents',
            'Плями від кави': 'Coffee stains',
            'Пиль на техніці': 'Dust on equipment',
            'Професійний вигляд': 'Professional look',
            'Приємна атмосфера': 'Pleasant atmosphere',
            'Підвищення продуктивності': 'Productivity increase',
            '🛋️ Хімчистка меблів': '🛋️ Furniture Dry Cleaning',
            'Диван після очищення': 'Sofa after cleaning',
            'До очищення': 'Before cleaning',
            'Після очищення': 'After cleaning',
            'Плями від вина': 'Wine stains',
            'Заляпання їжею': 'Food stains',
            'Шерсть тварин': 'Animal hair',
            'Як новий': 'Like new',
            'Свіжий вигляд': 'Fresh look',
            'Приємно користуватися': 'Pleasant to use',
            'Брудний ремонт': 'Dirty renovation',
            'Чиста квартира': 'Clean apartment',
            'Брудний офіс': 'Dirty office',
            'Чистий офіс': 'Clean office',
            'Брудний диван': 'Dirty sofa',
            'Чистий диван': 'Clean sofa',
            'Хочете такий же результат? Ми зробимо ваше приміщення ідеально чистим!': 'Want the same result? We will make your space perfectly clean!',
            '🚀 Замовити прибирання': '🚀 Order Cleaning',

            // Відгуки
            '💬 Відгуки клієнтів': '💬 Customer Reviews',
            'Показати ще відгуки': 'Show More Reviews',
            'Замовляла генеральне прибирання після новорічних свят. Результат вражає! Квартира сяє чистотой. Особливо вразила увага до деталей - вимили навіть віконні рами та жалюзі. Персонал дуже ввічливий та професійний. Вже порекомендувала подругам та планую зробити регулярне прибирання постійним.': 'Ordered general cleaning after the New Year holidays. The result is impressive! The apartment shines with cleanliness. I was especially impressed by the attention to details - they even washed window frames and blinds. The staff is very polite and professional. I have already recommended to friends and plan to make regular cleaning permanent.',
            'Замовляв прибирання офісу площею 150 м² після корпоративу. Хлопці впорались просто відмінно! За 4 години прибрали всі сліди вечірки, винесли сміття, вимили підлоги, столи та навіть розставили всі документи по місцях. Дуже зручно, що працюють з ранку - о 9 вже все було готове. Ціна абсолютно адекватна за такий об\'єм роботи.': 'Ordered office cleaning of 150 m² after a corporate party. The guys did just great! In 4 hours they removed all traces of the party, took out the trash, washed floors, tables and even arranged all documents in their places. Very convenient that they work from the morning - by 9 everything was ready. The price is absolutely adequate for such amount of work.',
            'Скористалась послугою регулярного прибирання 2 рази на місяць. Загалом дуже задоволена - квартира завжди чистенька, використовують якісні екологічні засоби, що важливо з маленькою дитиною. Єдиний недолік - іноді запізнюються на 15-20 хвилин, але завжди попереджають про це. В цілому рекомендую сервіс!': 'Used the regular cleaning service 2 times a month. Generally very satisfied - the apartment is always clean, they use quality eco-friendly products, which is important with a small child. The only drawback - sometimes they are late for 15-20 minutes, but always warn about it. Overall I recommend the service!',
            'Після ремонту в квартирі був просто жахливий бруд - пил, шпаклівка, фарба скрізь. Думав, що прибиратимуться тиждень. Але хлопці впорались за один день! Винесли весь будівельний сміття, відмили всі поверхні, навіть відтерли плями фарби з ламінату. Використовували спеціальні засоби для післяремонтного прибирання. Результат вражає - квартира як з журналу!': 'After renovation, there was just terrible dirt in the apartment - dust, putty, paint everywhere. I thought it would take a week to clean. But the guys managed in one day! They took out all construction waste, washed all surfaces, even wiped off paint stains from laminate. They used special means for post-renovation cleaning. The result is impressive - the apartment is like from a magazine!',

            // Калькулятор
            '🧮 Калькулятор вартості прибирання': '🧮 Cleaning Cost Calculator',
            'Тип прибирання:': 'Cleaning type:',
            'Звичайне прибирання': 'Regular cleaning',
            'Генеральне прибирання': 'General cleaning',
            'Післяремонтне прибирання': 'Post-renovation cleaning',
            'Комерційне прибирання': 'Commercial cleaning',
            'Площа приміщення (м²):': 'Room area (m²):',
            'Періодичність:': 'Frequency:',
            'Одноразове': 'One-time',
            'Щотижня (-10%)': 'Weekly (-10%)',
            '2 рази на місяць (-15%)': '2 times per month (-15%)',
            'Щомісяця (-20%)': 'Monthly (-20%)',
            'Додаткові послуги:': 'Additional services:',
            'Миття вікон (+200 грн)': 'Window washing (+200 UAH)',
            'Чистка холодильника (+150 грн)': 'Refrigerator cleaning (+150 UAH)',
            'Чистка духовки (+250 грн)': 'Oven cleaning (+250 UAH)',
            'Чистка шаф (+180 грн)': 'Wardrobe cleaning (+180 UAH)',
            'Прибирання балкона (+300 грн)': 'Balcony cleaning (+300 UAH)',
            'Розрахувати вартість': 'Calculate Cost',
            'Орієнтовна вартість:': 'Estimated cost:',
            'Оберіть параметри прибирання для розрахунку': 'Select cleaning parameters for calculation',
            '* Точну вартість уточнюйте у менеджера': '* Check exact cost with manager',

            // Контакти
            '🚀 Замовляйте прибирання вже сьогодні!': '🚀 Order Cleaning Today!',
            'Зв\'яжіться з нами для безкоштовної консультації та розрахунку вартості': 'Contact us for a free consultation and cost calculation',
            'Телефони': 'Phones',
            'Телефони:': 'Phones:',
            'Написати у Viber': 'Write in Viber',
            'Швидка відповідь': 'Quick response',
            'Наші роботи': 'Our works',
            'Переглянути': 'View',
            'Відгуки': 'Reviews',
            'Графік роботи': 'Working hours',
            'Пн-Нд: 8:00 - 20:00': 'Mon-Sun: 8:00 - 20:00',
            'Без вихідних': 'No days off',
            '📞 Передзвонити зараз': '📞 Call Now',
            '💬 Написати в Telegram': '💬 Write in Telegram',
            '📞 Замовити прибирання': '📞 Order Cleaning',

            // Сертифікати
            'НАШІ СЕРТИФІКАТИ ЯКОСТІ': 'OUR QUALITY CERTIFICATES',
            'Професійний підхід - гарантія чистоти вашого простору': 'Professional approach - guarantee of your space cleanliness',
            'ПЛАТИНОВИЙ СЕРТИФІКАТ': 'PLATINUM CERTIFICATE',
            'Найвищий рівень якості клінінгових послуг': 'Highest level of cleaning service quality',
            'Дійсний до:': 'Valid until:',
            'ЕКО-СЕРТИФІКАТ': 'ECO-CERTIFICATE',
            'Використання преміум біорозкладних засобів': 'Use of premium biodegradable products',
            'СЕРТИФІКАТ БЕЗПЕКИ': 'SAFETY CERTIFICATE',
            'Повна конфіденційність та гарантія якості': 'Complete confidentiality and quality guarantee',
            'ПРОФЕСІЙНИЙ СТАТУС': 'PROFESSIONAL STATUS',
            'Елітний клінінг сервіс преміум класу': 'Elite premium class cleaning service',
            'НАШЕ МІСЦЕЗНАХОДЖЕННЯ': 'OUR LOCATION',
            'Приїжджайте до нас - ми завжди раді вас бачити!': 'Come visit us - we\'re always happy to see you!',
            '🗺️ КАРТА GOOGLE MAPS': '🗺️ GOOGLE MAPS',
            'ПРЕМІУМ СЕРВІС': 'PREMIUM SERVICE',
            'ШВИДКИЙ ВИЇЗД': 'QUICK DEPARTURE',
            'ГАРАНТІЯ ЯКОСТІ': 'QUALITY GUARANTEE',
            'ВІДКРИТИ В GOOGLE MAPS': 'OPEN IN GOOGLE MAPS',

          // Футер
            'Соцмережі:': 'Social networks:',
            '&copy; 2025 Уберу. Всі права захищені.': '&copy; 2025 Uberu. All rights reserved.',






			// Модальні вікна типів робіт
        'Щоденне прибирання': 'Daily Cleaning',
        'Ідеальна чистота кожного дня': 'Perfect cleanliness every day',
        'Регулярне професійне прибирання для підтримання ідеальної чистоти у вашому домі. Наш підхід гарантує здорове середовище та економить ваш час для важливих речей.': 'Regular professional cleaning to maintain perfect cleanliness in your home. Our approach guarantees a healthy environment and saves your time for important things.',
        'Генеральне прибирання': 'General Cleaning',
        'Комплексне оновлення простору': 'Comprehensive space renewal',
        'Глибоке комплексне прибирання кожного куточка вашого помешкання. Використовуємо промислові пилососи, парові очищувачі та професійну хімію для ідеального результату.': 'Deep comprehensive cleaning of every corner of your home. We use industrial vacuum cleaners, steam cleaners and professional chemicals for perfect results.',
        'Післяремонтне прибирання': 'Post-Renovation Cleaning',
        'Чистота після будівельних робіт': 'Cleanliness after construction work',
        'Спеціалізоване прибирання після ремонту з використанням промислових пилососів та будівельної хімії. Видаляємо пил, фарбу, клей та повертаємо ідеальний вигляд.': 'Specialized cleaning after renovation using industrial vacuum cleaners and construction chemicals. We remove dust, paint, glue and restore perfect appearance.',
        'Офісне прибирання': 'Office Cleaning',
        'Професійне обслуговування бізнесу': 'Professional business service',
        'Комплексне обслуговування офісних приміщень з використанням тихого обладнання. Працюємо в неробочий час, не заважаючи бізнес-процесам.': 'Comprehensive maintenance of office premises using quiet equipment. We work outside business hours without interfering with business processes.',
        'Хімчистка меблів': 'Furniture Dry Cleaning',
        'Відновлення та освіження меблів': 'Furniture restoration and refreshment',
        'Професійна хімчистка меблів з використанням європейських безпечних засобів. Використовуємо екстракційне обладнання для глибокого очищення тканин.': 'Professional furniture dry cleaning using European safe products. We use extraction equipment for deep fabric cleaning.',
        'Прибирання авто': 'Car Cleaning',
        'Професійна чистка салону': 'Professional interior cleaning',
        'Комплексне прибирання салону автомобіля з використанням професійного обладнання. Використовуємо парогенератори, пилососи та спеціальну автохімію.': 'Comprehensive car interior cleaning using professional equipment. We use steam generators, vacuum cleaners and special auto chemicals.',
        
        // Переваги для модальних вікон
        'Економія часу': 'Time saving',
        'Здорове середовище': 'Healthy environment',
        'Регулярність': 'Regularity',
        'Професійний підхід': 'Professional approach',
        'Детальне очищення': 'Detailed cleaning',
        'Повне оновлення': 'Complete renewal',
        'Ідеальний результат': 'Perfect result',
        'Гігієна та здоров\'я': 'Hygiene and health',
        'Спеціалізоване обладнання': 'Specialized equipment',
        'Видалення будівельного пилу': 'Removal of construction dust',
        'Гарантія якості': 'Quality guarantee',
        'Готовність до заселення': 'Ready for occupancy',
        'Професійний імідж': 'Professional image',
        'Комфорт для співробітників': 'Comfort for employees',
        'Гнучкий графік': 'Flexible schedule',
        'Постійна підтримка': 'Constant support',
        'Відновлення меблів': 'Furniture restoration',
        'Екологічні засоби': 'Eco-friendly products',
        'Антибактеріальна обробка': 'Antibacterial treatment',
        'Збереження кольору': 'Color preservation',
        'Освіження повітря': 'Air refreshment',
        'Глибока чистка': 'Deep cleaning',
        'Якість преміум-класу': 'Premium quality',





            // Модальні вікна
            'Налаштування сайту': 'Site Settings',
            'Налаштуйте зовнішній вигляд та функціонал сайту під ваші уподобання.': 'Customize the appearance and functionality of the site to your preferences.',
            '🎨 Доступні налаштування:': '🎨 Available settings:',
            '🔧 Функції:': '🔧 Functions:',
            '🔄 Скинути налаштування': '🔄 Reset Settings',
            '💾 Зберегти зміни': '💾 Save Changes',
            '🌐 UA/EN': '🌐 EN/UA',
            '🎨 Спростити слайдер': '🎨 Simplify Slider',
            '✨ Епічний слайдер': '✨ Epic Slider',
            '👁️ Приховати "До/Після"': '👁️ Hide "Before/After"',
            '👁️ Показати "До/Після"': '👁️ Show "Before/After"',
            '🔄 Скинути все': '🔄 Reset All',
            '💾 Зберегти': '💾 Save',
            'Про наш сайт': 'About Our Site',
            'Опис сайту...': 'Site description...',
            '🚀 Функціонал сайту:': '🚀 Site Functionality:',
            '💻 Технології:': '💻 Technologies:',
            '👍 Дякую, зрозуміло': '👍 Thank you, understood',
            'Назва послуги': 'Service Name',
            'від 500 грн': 'from 500 UAH',
            'Професійний підхід - гарантія якості': 'Professional approach - quality guarantee',
            'Детальний опис послуги...': 'Detailed service description...',
            '📋 Що входить у послугу:': '📋 What\'s included in the service:',
            '🎯 Переваги послуги': '🎯 Service Benefits',
            '🧮 Розрахувати вартість': '🧮 Calculate Cost',
            '📞 Замовити консультацію': '📞 Order Consultation',
            'Сертифікат': 'Certificate',
            '🏆 Перший слайд': '🏆 First Slide',
            'Це перший слайд з ефектом перелистування': 'This is the first slide with swipe effect',
            '⭐ Другий слайд': '⭐ Second Slide',
            'Продовжуємо перегляд наступного слайду': 'Continue viewing the next slide',
            '🎯 Третій слайд': '🎯 Third Slide',
            'Останній слайд у нашій презентації': 'Last slide in our presentation',

            // Прелоадер
            'Уберу': 'Uberu',
            'Професійний клінінг': 'Professional Cleaning'
        } 
    };

    // Перекладаємо елементи з data-translate атрибутом
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Перекладаємо інші елементи за текстом
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, div, label, option, th, td, caption, figcaption, blockquote, cite, small, strong, em, mark, del, ins, sup, sub, code, pre, q, abbr, dfn, time, var, samp, kbd');
    
    textElements.forEach(element => {
        // Перевіряємо чи елемент містить текст і не має вкладених елементів з текстом
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            const text = element.textContent.trim();
            if (text && translations[lang] && translations[lang][text]) {
                element.textContent = translations[lang][text];
            }
        } else {
            // Для елементів з вкладеними елементами, перекладаємо лише текстовий вміст
            const walker = document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );
            
            let node;
            while (node = walker.nextNode()) {
                const text = node.textContent.trim();
                if (text && translations[lang] && translations[lang][text]) {
                    node.textContent = translations[lang][text];
                }
            }
        }
    });

    // Оновлюємо плейсхолдери
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder && translations[lang] && translations[lang][placeholder]) {
            input.setAttribute('placeholder', translations[lang][placeholder]);
        }
    });

    // Оновлюємо title атрибути
    const titles = document.querySelectorAll('[title]');
    titles.forEach(element => {
        const title = element.getAttribute('title');
        if (title && translations[lang] && translations[lang][title]) {
            element.setAttribute('title', translations[lang][title]);
        }
    });

    // Оновлюємо alt атрибути
    const alts = document.querySelectorAll('img[alt]');
    alts.forEach(img => {
        const alt = img.getAttribute('alt');
        if (alt && translations[lang] && translations[lang][alt]) {
            img.setAttribute('alt', translations[lang][alt]);
        }
    });



	translateWorkModals(lang);
    console.log('Page translated to:', lang);
}



















// Функція для перекладу всіх елементів калькулятора
function translateCalculatorElements(lang) {
    

    const trans = translations[lang];
    if (!trans) return;

    // Заголовок калькулятора
    const title = document.querySelector('.calculator-title');
    if (title && trans[title.textContent]) {
        title.textContent = trans[title.textContent];
    }

    // Лейбли
    document.querySelectorAll('.calculator-form label').forEach(label => {
        if (trans[label.textContent]) {
            label.textContent = trans[label.textContent];
        }
    });

    // Опції селектів
    document.querySelectorAll('.calculator-form select').forEach(select => {
        Array.from(select.options).forEach(option => {
            if (trans[option.textContent]) {
                option.textContent = trans[option.textContent];
            }
        });
    });

    // Чекбокси
    document.querySelectorAll('.checkbox-label').forEach(checkbox => {
        if (trans[checkbox.textContent]) {
            checkbox.textContent = trans[checkbox.textContent];
        }
    });

    // Кнопка
    const calculateBtn = document.querySelector('.calculate-btn');
    if (calculateBtn && trans[calculateBtn.textContent]) {
        calculateBtn.textContent = trans[calculateBtn.textContent];
    }

    // Результат
    const resultTitle = document.querySelector('.calculator-result h3');
    if (resultTitle && trans[resultTitle.textContent]) {
        resultTitle.textContent = trans[resultTitle.textContent];
    }

    const resultDetails = document.getElementById('price-details');
    if (resultDetails && trans[resultDetails.textContent]) {
        resultDetails.textContent = trans[resultDetails.textContent];
    }

    const resultNote = document.querySelector('.result-note');
    if (resultNote && trans[resultNote.textContent]) {
        resultNote.textContent = trans[resultNote.textContent];
    }

    const orderBtn = document.querySelector('.calculator-result .call-btn');
    if (orderBtn && trans[orderBtn.textContent]) {
        orderBtn.textContent = trans[orderBtn.textContent];
    }

    // Оновлюємо розрахунок, щоб змінити валюту
    calculatePrice();
}













// Функція для показу сповіщень
function showNotification(message, type = 'info') {
    // Створюємо елемент сповіщення
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Додаємо стилі для сповіщень
    if (!document.querySelector('.notification-styles')) {
        const styles = document.createElement('style');
        styles.className = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                z-index: 10000;
                max-width: 300px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: slideIn 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .notification.success { background: #4CAF50; }
            .notification.error { background: #f44336; }
            .notification.info { background: #2196F3; }
            .notification.warning { background: #ff9800; }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                margin-left: 10px;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Додаємо сповіщення на сторінку
    document.body.appendChild(notification);
    
    // Обробник закриття
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Автоматичне закриття через 3 секунди
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Функція для закриття модального вікна "Налаштування"
function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Функція для модального вікна "Налаштування"
function initSettingsModal() {
    const modal = document.getElementById('settingsModal');
    const closeBtn = modal ? modal.querySelector('.about-modal-close') : null;
    const modalTitle = document.getElementById('settingsModalTitle');
    const modalDescription = document.getElementById('settingsModalDescription');
    const modalFeatures = document.getElementById('settingsModalFeatures');
    const modalTech = document.getElementById('settingsModalTech');
    
    if (!modal) {
        console.log('Settings modal elements not found');
        return;
    }
    
    // Завантажуємо збережену мову
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'uk';
    document.documentElement.lang = savedLanguage;
    if (typeof translatePage === 'function') {
        translatePage(savedLanguage);
    }
    
    // Стани налаштувань
    let comparisonSectionVisible = localStorage.getItem('comparisonSectionVisible') !== 'false';
    let isEpicStyle = localStorage.getItem('sliderStyle') !== 'simple';

    // Дані для модального вікна "Налаштування" з підтримкою двох мов
    const settingsData = {
        title: {
            uk: 'Налаштування сайту',
            en: 'Site Settings'
        },
        description: {
            uk: 'Тут ви можете налаштувати зовнішній вигляд та функціонал сайту під ваші уподобання. Всі зміни зберігаються автоматично.',
            en: 'Customize the appearance and functionality of the site to your preferences. All changes are saved automatically.'
        },
        features: {
            uk: [
                'Зміна кольорової схеми сайту',
                'Перемикач між темною та світлою темами',
                'Налаштування розміру шрифту',
                'Вибір мови інтерфейсу',
                'Анімації та ефекти переходів',
                'Автозбереження ваших налаштувань',
                'Управління відображенням секцій',
                'Стилі слайдерів та анімацій'
            ],
            en: [
                'Changing site color scheme',
                'Switch between dark and light themes',
                'Font size settings',
                'Interface language selection',
                'Animations and transition effects',
                'Automatic saving of your settings',
                'Managing section display',
                'Slider styles and animations'
            ]
        },
        tech: {
            uk: [
                'Local Storage для збереження',
                'CSS Variables для тем',
                'JavaScript для динамічних змін',
                'Адаптивний дизайн',
                'Доступність та UX'
            ],
            en: [
                'Local Storage for saving',
                'CSS Variables for themes',
                'JavaScript for dynamic changes',
                'Adaptive design',
                'Accessibility and UX'
            ]
        }
    };

    // Функція для отримання поточної мови
    function getCurrentLanguage() {
        return document.documentElement.lang || 'uk';
    }

    // Функція для оновлення контенту модального вікна
    function updateModalContent() {
        const currentLang = getCurrentLanguage();
        
        if (modalTitle) modalTitle.textContent = settingsData.title[currentLang];
        if (modalDescription) modalDescription.textContent = settingsData.description[currentLang];
        
        // Очищаємо та заповнюємо список функцій
        if (modalFeatures) {
            modalFeatures.innerHTML = '';
            settingsData.features[currentLang].forEach(function(feature) {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });
        }
        
        // Очищаємо та заповнюємо технології
        if (modalTech) {
            modalTech.innerHTML = '';
            settingsData.tech[currentLang].forEach(function(tech) {
                const techItem = document.createElement('div');
                techItem.className = 'tech-item';
                techItem.innerHTML = `
                    <div class="tech-icon">⚡</div>
                    <p>${tech}</p>
                `;
                modalTech.appendChild(techItem);
            });
        }
        
        // Оновлюємо кнопки
        createSettingsActions();
    }
    
    // Функція для оновлення стану секції "До/Після"
    function updateComparisonSection() {
        const comparisonSection = document.getElementById('comparisonSection');
        if (comparisonSection) {
            if (comparisonSectionVisible) {
                comparisonSection.style.display = 'block';
                setTimeout(() => {
                    if (window.comparisonSwiper) {
                        window.comparisonSwiper.update();
                    }
                }, 100);
            } else {
                comparisonSection.style.display = 'none';
            }
        }
    }
    
    // Функція для оновлення стилю слайдера
    function updateSliderStyle() {
        const comparisonSection = document.getElementById('comparisonSection');
        if (comparisonSection) {
            if (isEpicStyle) {
                comparisonSection.classList.remove('simple-style');
            } else {
                comparisonSection.classList.add('simple-style');
            }
        }
    }
    
    // Функція для створення кнопок дій
    function createSettingsActions() {
        const actionsContainer = document.querySelector('#settingsModal .about-modal-actions');
        if (!actionsContainer) return;
        
        actionsContainer.innerHTML = '';
        
        const currentLang = getCurrentLanguage();
        
        // Кнопка для перемикання мови
        const languageToggleBtn = document.createElement('button');
        languageToggleBtn.className = 'about-modal-btn secondary';
        languageToggleBtn.innerHTML = currentLang === 'uk' ? '🌐 UA/EN' : '🌐 EN/UA';
        languageToggleBtn.addEventListener('click', function() {
            const newLang = currentLang === 'uk' ? 'en' : 'uk';
            
            // Змінюємо мову
            document.documentElement.lang = newLang;
            localStorage.setItem('preferredLanguage', newLang);
            
            // Викликаємо функцію перекладу
            if (typeof translatePage === 'function') {
                translatePage(newLang);
            }
            
            // Оновлюємо контент модального вікна
            updateModalContent();
            
            // Показуємо повідомлення
            if (typeof showNotification === 'function') {
                const message = newLang === 'uk' ? 'Мову змінено на українську' : 'Language changed to English';
                showNotification(message, 'success');
            }
        });
        actionsContainer.appendChild(languageToggleBtn);
        
        // Кнопка для перемикання стилю слайдера
        const styleToggleBtn = document.createElement('button');
        styleToggleBtn.className = 'about-modal-btn secondary';
        styleToggleBtn.innerHTML = isEpicStyle ? 
            (currentLang === 'uk' ? '🎨 Спростити слайдер' : '🎨 Simplify Slider') : 
            (currentLang === 'uk' ? '✨ Епічний слайдер' : '✨ Epic Slider');
        styleToggleBtn.addEventListener('click', function() {
            isEpicStyle = !isEpicStyle;
            localStorage.setItem('sliderStyle', isEpicStyle ? 'epic' : 'simple');
            updateSliderStyle();
            
            // Оновлюємо текст кнопки
            const currentLang = getCurrentLanguage();
            styleToggleBtn.innerHTML = isEpicStyle ? 
                (currentLang === 'uk' ? '🎨 Спростити слайдер' : '🎨 Simplify Slider') : 
                (currentLang === 'uk' ? '✨ Епічний слайдер' : '✨ Epic Slider');
        });
        actionsContainer.appendChild(styleToggleBtn);
        
        // Кнопка для перемикання секції "До/Після"
        const toggleComparisonBtn = document.createElement('button');
        toggleComparisonBtn.className = 'about-modal-btn secondary';
        toggleComparisonBtn.innerHTML = comparisonSectionVisible ? 
            (currentLang === 'uk' ? '👁️ Приховати "До/Після"' : '👁️ Hide "Before/After"') : 
            (currentLang === 'uk' ? '👁️ Показати "До/Після"' : '👁️ Show "Before/After"');
        toggleComparisonBtn.addEventListener('click', function() {
            comparisonSectionVisible = !comparisonSectionVisible;
            localStorage.setItem('comparisonSectionVisible', comparisonSectionVisible);
            updateComparisonSection();
            
            // Оновлюємо текст кнопки
            const currentLang = getCurrentLanguage();
            toggleComparisonBtn.innerHTML = comparisonSectionVisible ? 
                (currentLang === 'uk' ? '👁️ Приховати "До/Після"' : '👁️ Hide "Before/After"') : 
                (currentLang === 'uk' ? '👁️ Показати "До/Після"' : '👁️ Show "Before/After"');
        });
        actionsContainer.appendChild(toggleComparisonBtn);
        
        // Кнопка "Скинути налаштування"
        const resetBtn = document.createElement('button');
        resetBtn.className = 'about-modal-btn secondary';
        resetBtn.innerHTML = currentLang === 'uk' ? '🔄 Скинути все' : '🔄 Reset All';
        resetBtn.addEventListener('click', function() {
            const confirmMessage = currentLang === 'uk' ? 
                'Ви впевнені, що хочете скинути всі налаштування до стандартних?' : 
                'Are you sure you want to reset all settings to default?';
            
            if (confirm(confirmMessage)) {
                localStorage.removeItem('comparisonSectionVisible');
                localStorage.removeItem('sliderStyle');
                localStorage.removeItem('preferredLanguage');
                comparisonSectionVisible = true;
                isEpicStyle = true;
                updateComparisonSection();
                updateSliderStyle();
                
                // Скидаємо мову на українську
                document.documentElement.lang = 'uk';
                if (typeof translatePage === 'function') {
                    translatePage('uk');
                }
                
                closeSettingsModal();
                if (typeof showNotification === 'function') {
                    const message = currentLang === 'uk' ? 'Всі налаштування скинуті!' : 'All settings reset!';
                    showNotification(message, 'success');
                }
            }
        });
        actionsContainer.appendChild(resetBtn);
        
        // Кнопка "Зберегти зміни"
        const saveBtn = document.createElement('button');
        saveBtn.className = 'about-modal-btn primary';
        saveBtn.innerHTML = currentLang === 'uk' ? '💾 Зберегти' : '💾 Save';
        saveBtn.addEventListener('click', function() {
            closeSettingsModal();
            if (typeof showNotification === 'function') {
                const message = currentLang === 'uk' ? 'Налаштування збережено!' : 'Settings saved!';
                showNotification(message, 'success');
            }
        });
        actionsContainer.appendChild(saveBtn);
    }

    // Обробник кліку на кнопку "Налаштування"
    const settingsToggle = document.getElementById('settingsToggle');
    if (settingsToggle) {
        settingsToggle.addEventListener('click', function() {
            // Оновлюємо контент модального вікна
            updateModalContent();
            
            // Показуємо модальне вікно
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Функція для перекладу відкритого модального вікна
    function translateOpenModal() {
        if (modal.classList.contains('active')) {
            updateModalContent();
        }
    }
    
    // Додаємо обробник для перекладу при зміні мови
    window.addEventListener('languageChange', translateOpenModal);
    
    // Закриття модального вікна
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSettingsModal);
    }
    
    // Закриття по кліку поза вікна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeSettingsModal();
        }
    });
    
    // Закриття по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeSettingsModal();
        }
    });
    
    // Ініціалізація станів при завантаженні
    updateComparisonSection();
    updateSliderStyle();
    
    console.log('Settings modal initialized with dynamic translation');
}












// Додай цю функцію для плавного скролу та закриття модалки
function initModalButtons() {
    document.querySelectorAll('.work-modal-btn[href^="#"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Закриваємо модалку
            closeWorkModal();
            
            // Плавний скрол до секції після закриття модалки
            setTimeout(() => {
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 400); // Чекаємо поки закриється модалка
        });
    });
}




 
// Функція для модального вікна "Про сайт"
function initAboutModal() {
    const modal = document.getElementById('aboutModal');
    const closeBtn = modal.querySelector('.about-modal-close');
    
    if (!modal) return;
    
    // Дані для модального вікна "Про сайт" з підтримкою двох мов
    const aboutData = {
        title: {
            uk: 'Про розробника',
            en: 'About Developer'
        },
        description: {
            uk: 'Привіт! Я Микола (@kolya_fip) - Full-Stack розробник з пристрастю до створення інноваційних веб-рішень. Цей сайт - демонстрація моїх навичок у frontend розробці з використанням сучасних технологій.',
            en: 'Hello! I am Mykola (@kolya_fip) - Full-Stack developer with a passion for creating innovative web solutions. This site is a demonstration of my frontend development skills using modern technologies.'
        },
        features: {
            uk: [
                '🚀 5+ років досвіду у веб-розробці',
                '💻 Full-Stack JavaScript (Node.js, React, Vue)',
                '🎨 Креативний дизайн та UI/UX',
                '📱 Адаптивна та кросс-браузерна верстка',
                '⚡ Оптимізація продуктивності',
                '🔧 CI/CD та автоматизація'
            ],
            en: [
                '🚀 5+ years of experience in web development',
                '💻 Full-Stack JavaScript (Node.js, React, Vue)',
                '🎨 Creative design and UI/UX',
                '📱 Adaptive and cross-browser layout',
                '⚡ Performance optimization',
                '🔧 CI/CD and automation'
            ]
        },
        tech: {
            uk: [
                'Frontend: React, Vue, TypeScript',
                'Backend: Node.js, Express, MongoDB',
                'Mobile: React Native, Flutter',
                'Tools: Git, Docker, Webpack',
                'Cloud: AWS, Firebase, Vercel'
            ],
            en: [
                'Frontend: React, Vue, TypeScript',
                'Backend: Node.js, Express, MongoDB',
                'Mobile: React Native, Flutter',
                'Tools: Git, Docker, Webpack',
                'Cloud: AWS, Firebase, Vercel'
            ]
        }
    };

    // Змінні для падаючих слів
    let wordInterval;
    let backgroundContainer = null;
    let wordsEnabled = true;

    // Функція для отримання поточної мови
    function getCurrentLanguage() {
        return document.documentElement.lang || 'uk';
    }

    // Функція для оновлення контенту модального вікна
    function updateModalContent() {
        const currentLang = getCurrentLanguage();
        const modalTitle = document.getElementById('aboutModalTitle');
        const modalDescription = document.getElementById('aboutModalDescription');
        const modalFeatures = document.getElementById('aboutModalFeatures');
        const modalTech = document.getElementById('aboutModalTech');
        
        // Заповнюємо модальне вікно
        if (modalTitle) modalTitle.textContent = aboutData.title[currentLang];
        if (modalDescription) modalDescription.textContent = aboutData.description[currentLang];
        
        // Очищаємо та заповнюємо список функцій
        if (modalFeatures) {
            modalFeatures.innerHTML = '';
            aboutData.features[currentLang].forEach(function(feature) {
                const li = document.createElement('li');
                li.innerHTML = feature;
                modalFeatures.appendChild(li);
            });
        }
        
        // Очищаємо та заповнюємо технології
        if (modalTech) {
            modalTech.innerHTML = '';
            aboutData.tech[currentLang].forEach(function(tech) {
                const techItem = document.createElement('div');
                techItem.className = 'tech-item';
                techItem.innerHTML = `
                    <div class="tech-icon">⚡</div>
                    <p>${tech}</p>
                `;
                modalTech.appendChild(techItem);
            });
        }
        
        // Створюємо кнопки
        createActionButtons();
    }

    // Функція для падаючих слів FIPOKZEC
    function startFipokzecWords() {
        if (!wordsEnabled) return;
        
        // Видаляємо старий контейнер якщо є
        if (backgroundContainer) {
            backgroundContainer.remove();
        }
        
        // Створюємо контейнер для слів
        backgroundContainer = document.createElement('div');
        backgroundContainer.className = 'fipokzec-background';
        document.body.appendChild(backgroundContainer);
        
        // Створюємо слова кожні 400ms
        wordInterval = setInterval(createFipokzecWord, 400);
        
        // Перші 5 слів одразу
        for(let i = 0; i < 5; i++) {
            setTimeout(createFipokzecWord, i * 200);
        }
    }

    function stopFipokzecWords() {
        clearInterval(wordInterval);
        
        // Видаляємо контейнер з усіма словами
        if (backgroundContainer && backgroundContainer.parentNode) {
            backgroundContainer.remove();
            backgroundContainer = null;
        }
    }

    function toggleWords() {
        const toggleBtn = document.getElementById('toggleWordsBtn');
        const currentLang = getCurrentLanguage();
        
        const styleClasses = [
            { name: { uk: '🌈 Веселка', en: '🌈 Rainbow' }, class: 'rainbow-style' },
            { name: { uk: '🔥 Вогонь', en: '🔥 Fire' }, class: 'fire-style' },
            { name: { uk: '🌊 Океан', en: '🌊 Ocean' }, class: 'ocean-style' },
            { name: { uk: '🍃 Природа', en: '🍃 Nature' }, class: 'nature-style' },
            { name: { uk: '👑 Золото', en: '👑 Gold' }, class: 'gold-style' },
            { name: { uk: '⚡ Енергія', en: '⚡ Energy' }, class: 'energy-style' },
            { name: { uk: '💚 Неон', en: '💚 Neon' }, class: 'neon-style' },
            { name: { uk: '🌌 Галактика', en: '🌌 Galaxy' }, class: 'galaxy-style' }
        ];
        
        const randomStyle = styleClasses[Math.floor(Math.random() * styleClasses.length)];
        
        // Видаляємо всі попередні стилі
        document.querySelectorAll('.fipokzec-word').forEach(word => {
            word.className = 'fipokzec-word'; // Скидаємо до базового класу
            word.classList.add(randomStyle.class);
        });
        
        toggleBtn.innerHTML = `🎨 ${randomStyle.name[currentLang]}`;
        
        // Додаємо ефект переходу
        toggleBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleBtn.style.transform = 'scale(1)';
        }, 150);
    }

    function createFipokzecWord() {
        if (!backgroundContainer || !wordsEnabled) return;
        
        const word = document.createElement('div');
        word.className = 'fipokzec-word';
        word.textContent = 'FIPOKZEC';
        word.style.left = Math.random() * 100 + 'vw';
        
        backgroundContainer.appendChild(word);
        
        // Видаляємо слово після завершення анімації
        setTimeout(() => {
            if (word.parentNode === backgroundContainer) {
                backgroundContainer.removeChild(word);
            }
        }, 8000);
    }
    
    // Функція для відкриття посилань
    function openLink(url) {
        window.open(url, '_blank');
    }
    
    // Функція для створення кнопок
    function createActionButtons() {
        const actionsContainer = document.querySelector('#aboutModal .about-modal-actions');
        if (!actionsContainer) return;
        
        actionsContainer.innerHTML = '';
        
        const currentLang = getCurrentLanguage();
        
        // Кнопка GitHub
        const githubBtn = document.createElement('button');
        githubBtn.className = 'about-modal-btn secondary';
        githubBtn.innerHTML = '<i class="fab fa-github"></i> GitHub';
        githubBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openLink('https://github.com/Kolya-f');
        });
        actionsContainer.appendChild(githubBtn);
        
        // Кнопка Telegram
        const telegramBtn = document.createElement('button');
        telegramBtn.className = 'about-modal-btn secondary';
        telegramBtn.innerHTML = '<i class="fab fa-telegram"></i> Telegram';
        telegramBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openLink('https://t.me/kolya_fip');
        });
        actionsContainer.appendChild(telegramBtn);
        
        // Кнопка перемикача слів
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'toggleWordsBtn';
        toggleBtn.className = 'about-modal-btn toggle-words-btn words-active';
        toggleBtn.innerHTML = currentLang === 'uk' ? '🎯 Вимкнути слова' : '🎯 Disable Words';
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleWords();
        });
        actionsContainer.appendChild(toggleBtn);
        
        // Кнопка "Круто!"
        const coolBtn = document.createElement('button');
        coolBtn.className = 'about-modal-btn primary';
        coolBtn.innerHTML = currentLang === 'uk' ? '👍 Круто!' : '👍 Cool!';
        coolBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAboutModal();
            const message = currentLang === 'uk' ? 
                'Дякую за підтримку! 🚀\nПиши в Telegram для співпраці!' : 
                'Thank you for support! 🚀\nWrite in Telegram for collaboration!';
            alert(message);
        });
        actionsContainer.appendChild(coolBtn);
    }
    
    // Обробник кліку на кнопку "Про сайт"
    document.addEventListener('click', function(e) {
        if (e.target.closest('.about-modal-btn') && !e.target.closest('#aboutModal .about-modal-actions')) {
            // Оновлюємо контент модального вікна
            updateModalContent();
            
            // Запускаємо падаючі слова
            startFipokzecWords();
            
            // Показуємо модальне вікно
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
    
    // Функція для перекладу відкритого модального вікна
    function translateOpenModal() {
        if (modal.classList.contains('active')) {
            updateModalContent();
        }
    }
    
    // Додаємо обробник для перекладу при зміні мови
    window.addEventListener('languageChange', translateOpenModal);
    
    // Закриття модального вікна
    closeBtn.addEventListener('click', function() {
        closeAboutModal();
    });
    
    // Закриття по кліку поза вікна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeAboutModal();
        }
    });
    
    // Закриття по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeAboutModal();
        }
    });

    // Функція для закриття модального вікна "Про сайт"
    function closeAboutModal() {
        const modal = document.getElementById('aboutModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        stopFipokzecWords();
        wordsEnabled = true;
    }
    
    console.log('About modal initialized with dynamic translation');
}

// Ініціалізація при завантаженні
document.addEventListener('DOMContentLoaded', function() {
    initAboutModal();
});

 
// Функція для модальних вікон типів робіт
function initWorkTypesModal() {
    const modal = document.getElementById('workTypeModal');
    const closeBtn = document.querySelector('.work-modal-close');
    const modalIcon = document.getElementById('workModalIcon');
    const modalTitle = document.getElementById('workModalTitle');
    const modalPrice = document.getElementById('workModalPrice');
    const modalSubtitle = document.getElementById('workModalSubtitle');
    const modalDescription = document.getElementById('workModalDescription');
    const modalFeatures = document.getElementById('workModalFeatures');
    const modalBenefits = document.getElementById('workModalBenefits');
    
    if (!modal) {
        console.log('Work type modal elements not found');
        return;
    }
    
    // Дані для кожного типу робіт з перевагами та відео
    const workTypesData = {
        'daily': {
            icon: '🏠',
            title: { uk: 'Щоденне прибирання', en: 'Daily Cleaning' },
            price: { uk: 'від 500 грн', en: 'from 500 UAH' },
            subtitle: { uk: 'Ідеальна чистота кожного дня', en: 'Perfect cleanliness every day' },
            description: { 
                uk: 'Регулярне професійне прибирання для підтримання ідеальної чистоти у вашому домі. Наш підхід гарантує здорове середовище та економить ваш час для важливих речей.', 
                en: 'Regular professional cleaning to maintain perfect cleanliness in your home. Our approach guarantees a healthy environment and saves your time for important things.' 
            },
            video: 'https://raw.githubusercontent.com/Kolya-f/v/main/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE1.mp4',
            features: {
                uk: [
                    '✨ Пилосос підлоги та килимів з HEPA-фільтрами',
                    '🌟 Протирання пилу з усіх поверхонь мікрофіброю',
                    '💫 Миття підлоги спеціальними екологічними засобами',
                    '🔮 Чистка дзеркал та скляних поверхонь без розводів',
                    '🧼 Прибирання санвузла з професійною дезінфекцією',
                    '🍃 Протирання кухонних поверхонь антибактеріальними засобами',
                    '🗑️ Сортування та винесення сміття з сортуванням',
                    '🏠 Розставляння речей по місцях з дотриманням порядку'
                ],
                en: [
                    '✨ Vacuuming floors and carpets with HEPA filters',
                    '🌟 Dusting all surfaces with microfiber',
                    '💫 Floor washing with special eco-friendly products',
                    '🔮 Cleaning mirrors and glass surfaces without streaks',
                    '🧼 Bathroom cleaning with professional disinfection',
                    '🍃 Wiping kitchen surfaces with antibacterial agents',
                    '🗑️ Sorting and taking out trash with recycling',
                    '🏠 Arranging items in place with order maintenance'
                ]
            },
            benefits: [
                { 
                    icon: '⏱️', 
                    text: { uk: 'Економія часу', en: 'Time saving' } 
                },
                { 
                    icon: '🌿', 
                    text: { uk: 'Здорове середовище', en: 'Healthy environment' } 
                },
                { 
                    icon: '📅', 
                    text: { uk: 'Регулярність', en: 'Regularity' } 
                },
                { 
                    icon: '💎', 
                    text: { uk: 'Професійний підхід', en: 'Professional approach' } 
                }
            ]
        },
        'general': {
            icon: '✨',
            title: { uk: 'Генеральне прибирання', en: 'General Cleaning' },
            price: { uk: 'від 1500 грн', en: 'from 1500 UAH' },
            subtitle: { uk: 'Комплексне оновлення простору', en: 'Comprehensive space renewal' },
            description: { 
                uk: 'Глибоке комплексне прибирання кожного куточка вашого помешкання. Використовуємо промислові пилососи, парові очищувачі та професійну хімію для ідеального результату.', 
                en: 'Deep comprehensive cleaning of every corner of your home. We use industrial vacuum cleaners, steam cleaners and professional chemicals for perfect results.' 
            },
            video: 'https://raw.githubusercontent.com/Kolya-f/v/main/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE2.mp4',
            features: {
                uk: [
                    '🏙️ Миття вікон та підвіконь з обох сторін з альпіністським обладнанням',
                    '🔍 Глибока чистка меблів зсередини з розбиранням',
                    '💡 Миття люстр, світильників та бра з демаонтажем',
                    '🔥 Чистка радіаторів опалення паровим методом',
                    '🚪 Прибирання шаф, комодів, полиць з сортуванням',
                    '🚿 Миття дверей, ручок, вимикачів з дезінфекцією',
                    '🌬️ Чистка витяжок та вентиляційних решіток',
                    '🦠 Дезінфекція всіх поверхонь УФ-лампою'
                ],
                en: [
                    '🏙️ Washing windows and window sills from both sides with climbing equipment',
                    '🔍 Deep cleaning of furniture from inside with disassembly',
                    '💡 Washing chandeliers, lamps and sconces with dismantling',
                    '🔥 Cleaning radiators with steam method',
                    '🚪 Cleaning cabinets, dressers, shelves with sorting',
                    '🚿 Washing doors, handles, switches with disinfection',
                    '🌬️ Cleaning hoods and ventilation grilles',
                    '🦠 Disinfection of all surfaces with UV lamp'
                ]
            },
            benefits: [
                { 
                    icon: '🔍', 
                    text: { uk: 'Детальне очищення', en: 'Detailed cleaning' } 
                },
                { 
                    icon: '🔄', 
                    text: { uk: 'Повне оновлення', en: 'Complete renewal' } 
                },
                { 
                    icon: '🌟', 
                    text: { uk: 'Ідеальний результат', en: 'Perfect result' } 
                },
                { 
                    icon: '🛡️', 
                    text: { uk: 'Гігієна та здоров\'я', en: 'Hygiene and health' } 
                }
            ]
        },
        'after-repair': {
            icon: '🏗️',
            title: { uk: 'Післяремонтне прибирання', en: 'Post-Renovation Cleaning' },
            price: { uk: 'від 2000 грн', en: 'from 2000 UAH' },
            subtitle: { uk: 'Чистота після будівельних робіт', en: 'Cleanliness after construction work' },
            description: { 
                uk: 'Спеціалізоване прибирання після ремонту з використанням промислових пилососів та будівельної хімії. Видаляємо пил, фарбу, клей та повертаємо ідеальний вигляд.', 
                en: 'Specialized cleaning after renovation using industrial vacuum cleaners and construction chemicals. We remove dust, paint, glue and restore perfect appearance.' 
            },
            video: 'https://raw.githubusercontent.com/Kolya-f/v/main/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE1.mp4',
            features: {
                uk: [
                    '🏗️ Винесення будівельного сміття та упаковки з сортуванням',
                    '🌫️ Видалення будівельного пилу з усіх поверхонь промисловими пилососами',
                    '🪟 Миття вікон від фарби та забруднень спеціальними розчинниками',
                    '💨 Чистка систем вентиляції та кондиціонерів з дезінфекцією',
                    '✨ Фінальне миття всіх поверхонь професійною хімією',
                    '🔌 Чистка електроприладів від пилу з розбиранням',
                    '🍃 Дезінфекція та освіження повітря озонуючими приладами',
                    '✅ Перевірка якості прибирання з фінальною інспекцією'
                ],
                en: [
                    '🏗️ Removal of construction waste and packaging with sorting',
                    '🌫️ Removal of construction dust from all surfaces with industrial vacuum cleaners',
                    '🪟 Window cleaning from paint and dirt with special solvents',
                    '💨 Cleaning ventilation systems and air conditioners with disinfection',
                    '✨ Final washing of all surfaces with professional chemicals',
                    '🔌 Cleaning electrical appliances from dust with disassembly',
                    '🍃 Disinfection and air refreshment with ozone generators',
                    '✅ Quality check of cleaning with final inspection'
                ]
            },
            benefits: [
                { 
                    icon: '🚧', 
                    text: { uk: 'Спеціалізоване обладнання', en: 'Specialized equipment' } 
                },
                { 
                    icon: '🌫️', 
                    text: { uk: 'Видалення будівельного пилу', en: 'Removal of construction dust' } 
                },
                { 
                    icon: '✅', 
                    text: { uk: 'Гарантія якості', en: 'Quality guarantee' } 
                },
                { 
                    icon: '🏡', 
                    text: { uk: 'Готовність до заселення', en: 'Ready for occupancy' } 
                }
            ]
        },
        'office': {
            icon: '🏢',
            title: { uk: 'Офісне прибирання', en: 'Office Cleaning' },
            price: { uk: 'від 800 грн/міс', en: 'from 800 UAH/month' },
            subtitle: { uk: 'Професійне обслуговування бізнесу', en: 'Professional business service' },
            description: { 
                uk: 'Комплексне обслуговування офісних приміщень з використанням тихого обладнання. Працюємо в неробочий час, не заважаючи бізнес-процесам.', 
                en: 'Comprehensive maintenance of office premises using quiet equipment. We work outside business hours without interfering with business processes.' 
            },
            video: 'https://raw.githubusercontent.com/Kolya-f/v/main/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE1.mp4',
            features: {
                uk: [
                    '📊 Щоденне/щотижневе обслуговування за індивідуальним графіком',
                    '💻 Прибирання робочих місць та техніки з антистатичними засобами',
                    '🚻 Миття санвузлів, кухонь, зон відпочинку з дезінфекцією',
                    '🗑️ Винос сміття та заміна пакетів з сортуванням',
                    '🦠 Дезінфекція дверних ручок, вимикачів, поручнів',
                    '🎯 Чистка конференц-залів, переговорних після зустрічей',
                    '🏢 Обслуговування рецепції, холу, зони очікування',
                    '📈 Спеціальні умови для бізнес-клієнтів зі звітністю'
                ],
                en: [
                    '📊 Daily/weekly service according to individual schedule',
                    '💻 Cleaning workplaces and equipment with antistatic agents',
                    '🚻 Washing bathrooms, kitchens, rest areas with disinfection',
                    '🗑️ Trash removal and bag replacement with sorting',
                    '🦠 Disinfection of door handles, switches, handrails',
                    '🎯 Cleaning conference halls, meeting rooms after meetings',
                    '🏢 Maintenance of reception, hall, waiting area',
                    '📈 Special conditions for business clients with reporting'
                ]
            },
            benefits: [
                { 
                    icon: '💼', 
                    text: { uk: 'Професійний імідж', en: 'Professional image' } 
                },
                { 
                    icon: '👥', 
                    text: { uk: 'Комфорт для співробітників', en: 'Comfort for employees' } 
                },
                { 
                    icon: '📊', 
                    text: { uk: 'Гнучкий графік', en: 'Flexible schedule' } 
                },
                { 
                    icon: '🔄', 
                    text: { uk: 'Постійна підтримка', en: 'Constant support' } 
                }
            ]
        },
        'furniture': {
            icon: '🧹',
            title: { uk: 'Хімчистка меблів', en: 'Furniture Dry Cleaning' },
            price: { uk: 'від 700 грн', en: 'from 700 UAH' },
            subtitle: { uk: 'Відновлення та освіження меблів', en: 'Furniture restoration and refreshment' },
            description: { 
                uk: 'Професійна хімчистка меблів з використанням європейських безпечних засобів. Використовуємо екстракційне обладнання для глибокого очищення тканин.', 
                en: 'Professional furniture dry cleaning using European safe products. We use extraction equipment for deep fabric cleaning.' 
            },
            video: 'https://raw.githubusercontent.com/Kolya-f/v/main/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE1.mp4',
            features: {
                uk: [
                    '🛋️ Хімчистка диванів, крісел, куточків екстракційним методом',
                    '✨ Глибока чистка стільців, пуфів, табуретів з розбиранням',
                    '🎯 Видалення складних плям (кава, вино, кров) спеціальними засобами',
                    '🛏️ Чистка матраців, подушок, покривал з антиалергенною обробкою',
                    '🌿 Освіження та ароматизація ткачин натуральними екстрактами',
                    '🔬 Антибактеріальна та антиалергенна обробка УФ-лампою',
                    '🛡️ Захист від майбутніх забруднень імпрегнуючими спреями',
                    '💨 Сушка та перевірка результату з гарантією якості'
                ],
                en: [
                    '🛋️ Dry cleaning of sofas, chairs, corner sofas with extraction method',
                    '✨ Deep cleaning of chairs, poufs, stools with disassembly',
                    '🎯 Removal of difficult stains (coffee, wine, blood) with special agents',
                    '🛏️ Cleaning mattresses, pillows, bedspreads with anti-allergenic treatment',
                    '🌿 Refreshment and aromatization of fabrics with natural extracts',
                    '🔬 Antibacterial and anti-allergenic treatment with UV lamp',
                    '🛡️ Protection from future contamination with impregnating sprays',
                    '💨 Drying and result verification with quality guarantee'
                ]
            },
            benefits: [
                { 
                    icon: '🛋️', 
                    text: { uk: 'Відновлення меблів', en: 'Furniture restoration' } 
                },
                { 
                    icon: '🌱', 
                    text: { uk: 'Екологічні засоби', en: 'Eco-friendly products' } 
                },
                { 
                    icon: '🔬', 
                    text: { uk: 'Антибактеріальна обробка', en: 'Antibacterial treatment' } 
                },
                { 
                    icon: '🎨', 
                    text: { uk: 'Збереження кольору', en: 'Color preservation' } 
                }
            ]
        },
        'car': {
            icon: '🚗',
            title: { uk: 'Прибирання авто', en: 'Car Cleaning' },
            price: { uk: 'від 400 грн', en: 'from 400 UAH' },
            subtitle: { uk: 'Професійна чистка салону', en: 'Professional interior cleaning' },
            description: { 
                uk: 'Комплексне прибирання салону автомобіля з використанням професійного обладнання. Використовуємо парогенератори, пилососи та спеціальну автохімію.', 
                en: 'Comprehensive car interior cleaning using professional equipment. We use steam generators, vacuum cleaners and special auto chemicals.' 
            },
            video: 'https://raw.githubusercontent.com/Kolya-f/v/main/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE1.mp4',
            features: {
                uk: [
                    '🚙 Пилосос салону, багажника, багажних відділень з турбощіткою',
                    '🔮 Миття скла, дзеркал, фар з обох сторін без розводів',
                    '🎛️ Чистка торпедо, панелі приладів, консолі з кондиціонуванням',
                    '🧽 Миття ковриків, обробка швів з видаленням глибоких забруднень',
                    '🌸 Дезодорація та ароматизація салону озонуючими приладами',
                    '🧳 Чистка багажника, запаскоутримувачів з антикорозійною обробкою',
                    '⚡ Обробка пластикових та шкіряних поверхонь кондиціонерами',
                    '✅ Фінальна перевірка якості з полируванням пластику'
                ],
                en: [
                    '🚙 Vacuuming interior, trunk, luggage compartments with turbo brush',
                    '🔮 Washing glass, mirrors, headlights from both sides without streaks',
                    '🎛️ Cleaning dashboard, instrument panel, console with conditioning',
                    '🧽 Washing mats, seam treatment with removal of deep contaminants',
                    '🌸 Deodorization and aromatization of interior with ozone generators',
                    '🧳 Cleaning trunk, spare tire holders with anti-corrosion treatment',
                    '⚡ Treatment of plastic and leather surfaces with conditioners',
                    '✅ Final quality check with plastic polishing'
                ]
            },
            benefits: [
                { 
                    icon: '🚙', 
                    text: { uk: 'Професійне обладнання', en: 'Professional equipment' } 
                },
                { 
                    icon: '🌬️', 
                    text: { uk: 'Освіження повітря', en: 'Air refreshment' } 
                },
                { 
                    icon: '🧽', 
                    text: { uk: 'Глибока чистка', en: 'Deep cleaning' } 
                },
                { 
                    icon: '⭐', 
                    text: { uk: 'Якість преміум-класу', en: 'Premium quality' } 
                }
            ]
        }
    };

    // Функція для отримання поточної мови
    function getCurrentLanguage() {
        return document.documentElement.lang || 'uk';
    }

    // Функція для оновлення контенту модального вікна
    function updateModalContent(workType) {
        const workData = workTypesData[workType];
        const currentLang = getCurrentLanguage();
        
        if (workData) {
            // Заповнюємо модальне вікно з урахуванням мови
            modalIcon.textContent = workData.icon;
            modalTitle.textContent = workData.title[currentLang];
            modalPrice.textContent = workData.price[currentLang];
            modalSubtitle.textContent = workData.subtitle[currentLang];
            modalDescription.textContent = workData.description[currentLang];
            
            // Додаємо відео, якщо воно є
            if (workData.video) {
                if (!document.getElementById('workModalVideo')) {
                    const videoContainer = document.createElement('div');
                    videoContainer.className = 'work-modal-video';
                    videoContainer.innerHTML = `
                        <video id="workModalVideo" controls style="width: 100%; max-width: 500px; border-radius: 10px; margin: 15px 0;">
                            <source src="${workData.video}" type="video/mp4">
                            Ваш браузер не підтримує відео.
                        </video>
                    `;
                    modalDescription.parentNode.insertBefore(videoContainer, modalDescription.nextSibling);
                } else {
                    const video = document.getElementById('workModalVideo');
                    video.querySelector('source').src = workData.video;
                    video.load();
                }
            } else {
                // Видаляємо відео контейнер, якщо відео немає
                const videoContainer = document.querySelector('.work-modal-video');
                if (videoContainer) {
                    videoContainer.remove();
                }
            }
            
            // Очищаємо та заповнюємо список функцій
            modalFeatures.innerHTML = '';
            workData.features[currentLang].forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });
            
            // Очищаємо та заповнюємо переваги
            modalBenefits.innerHTML = '';
            workData.benefits.forEach(benefit => {
                const benefitItem = document.createElement('div');
                benefitItem.className = 'benefit-item';
                benefitItem.innerHTML = `
                    <div class="benefit-icon">${benefit.icon}</div>
                    <p>${benefit.text[currentLang]}</p>
                `;
                modalBenefits.appendChild(benefitItem);
            });
            
            // Показуємо модальне вікно
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Обробник кліку на кнопки
    document.querySelectorAll('.work-type-modal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const workType = this.getAttribute('data-work-type');
            updateModalContent(workType);
        });
    });
    
    // Функція для перекладу відкритого модального вікна
    function translateOpenModal() {
        if (modal.classList.contains('active')) {
            // Знаходимо активний тип робіт
            const activeButtons = document.querySelectorAll('.work-type-modal-btn.active');
            if (activeButtons.length > 0) {
                const workType = activeButtons[0].getAttribute('data-work-type');
                updateModalContent(workType);
            }
        }
    }
    
    // Додаємо обробник для перекладу при зміні мови
    window.addEventListener('languageChange', translateOpenModal);
    
    // Закриття модального вікна
    closeBtn.addEventListener('click', closeWorkModal);
    
    // Закриття по кліку поза вікна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeWorkModal();
        }
    });
    
    // Закриття по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeWorkModal();
        }
    });
    
    // Додаємо клас active до кнопки при відкритті модального вікна
    document.querySelectorAll('.work-type-modal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.work-type-modal-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    initModalButtons();
    
    console.log('Work types modal initialized with dynamic translation');
}

// Функція для закриття модального вікна робіт
function closeWorkModal() {
    const modal = document.getElementById('workTypeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Видаляємо активний клас з кнопок
    document.querySelectorAll('.work-type-modal-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Додаємо функцію для виклику перекладу модального вікна з основної функції перекладу
function translateWorkModals(lang) {
    // Оновлюємо мову в документі
    document.documentElement.lang = lang;
    
    // Викликаємо подію для перекладу відкритого модального вікна
    window.dispatchEvent(new CustomEvent('languageChange'));
}
































 
// Функція для плавного з'явлення контенту
function initContentAnimation() {
    const contentElements = document.querySelectorAll('.header, .nav, .static-content, .about-section, .work-types-section, .calculator-section, .services-section, .advantages-section, .cta-section, .footer, .reviews-section');
    
    contentElements.forEach(function(element, index) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(function() {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + (index * 100)); // Послідовне з'явлення
    });
}

-

// Функція для створення бульбашок
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            // Випадкові параметри
            const size = Math.random() * 60 + 20;
            const left = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = left + '%';
            bubble.style.animationDuration = duration + 's';
            bubble.style.animationDelay = delay + 's';
            
            container.appendChild(bubble);
            
            // Видаляємо бульбашку після анімації
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, (duration + delay) * 1000);
        }, i * 1000);
    }
}

// Анімація лічильників
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + (target === 24 ? '/7' : target === 99 ? '%' : '+');
        }, 16);
    });
}

// Анімація появи елементів при скролі
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-item, .advantage-card, .review-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            const delay = element.getAttribute('data-delay') || 0;
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}

// Плавний скрол для навігації
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Функція для автоматичного перелистування галереї
function initGallerySlideshow() {
    const slides = document.querySelectorAll('.gallery-slide');
    const counter = document.querySelector('.gallery-counter');
    let currentSlide = 0;
    
    if (slides.length === 0) {
        console.log('No gallery slides found');
        return;
    }
    
    function changeSlide() {
        // Ховаємо поточний слайд
        slides[currentSlide].classList.remove('active');
        
        // Переходимо до наступного
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Показуємо новий слайд
        slides[currentSlide].classList.add('active');
        
        // Оновлюємо лічильник
        if (counter) {
            counter.textContent = (currentSlide + 1) + '/' + slides.length;
        }
    }
    
    // Автоматична зміна кожні 5 секунд
    setInterval(changeSlide, 3000);
    
    console.log('Gallery slideshow initialized with', slides.length, 'slides');
}

// Функція для кнопки "Показати більше відгуків" з підтримкою перекладу
function initReviewsToggle() {
    const showMoreBtn = document.querySelector('.show-more-reviews');
    const reviewsGrid = document.querySelector('.reviews-grid');
    
    if (!showMoreBtn || !reviewsGrid) {
        console.log('Reviews elements not found');
        return;
    }
    
    console.log('Initializing reviews toggle...');
    
    let showingAll = false;
    
    // Функція для оновлення тексту кнопки з урахуванням мови
    function updateButtonText() {
        const currentLang = document.documentElement.lang || 'uk';
        
        if (currentLang === 'uk') {
            if (showingAll) {
                showMoreBtn.innerHTML = 'Сховати відгуки <span class="arrow-down">↑</span>';
            } else {
                showMoreBtn.innerHTML = 'Показати ще відгуки <span class="arrow-down">↓</span>';
            }
        } else {
            if (showingAll) {
                showMoreBtn.innerHTML = 'Hide reviews <span class="arrow-down">↑</span>';
            } else {
                showMoreBtn.innerHTML = 'Show more reviews <span class="arrow-down">↓</span>';
            }
        }
    }
    
    showMoreBtn.addEventListener('click', function() {
        console.log('Show more button clicked');
        
        if (showingAll) {
            // Ховаємо додаткові відгуки
            reviewsGrid.classList.remove('show-all');
            showingAll = false;
        } else {
            // Показуємо всі відгуки
            reviewsGrid.classList.add('show-all');
            showingAll = true;
        }
        
        // Оновлюємо текст кнопки після кліку
        updateButtonText();
    });
    
    // Функція для перекладу кнопки (викликатиметься з translatePage)
    function translateReviewsButton(lang) {
        showingAll = reviewsGrid.classList.contains('show-all');
        updateButtonText();
    }
    
    // Додаємо функцію перекладу в глобальну область видимості
    window.translateReviewsButton = translateReviewsButton;
    
    // Ініціалізуємо текст кнопки при завантаженні
    updateButtonText();
    
    // Перевіряємо чи є відгуки
    const reviewCards = document.querySelectorAll('.review-card');
    console.log('Found review cards:', reviewCards.length);
}
 


// Додаткові функції для покращення UX
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}


// Функція для навігаційного меню (три крапки)
function initNavDotsMenu() {
    const navDotsButton = document.getElementById('navDotsButton');
    const navDotsMenu = document.getElementById('navDotsMenu');
    
    if (!navDotsButton || !navDotsMenu) return;
    
    navDotsButton.addEventListener('click', function(e) {
        e.stopPropagation();
        navDotsMenu.classList.toggle('active');
    });
    
    // Закриваємо меню при кліку поза ним
    document.addEventListener('click', function(e) {
        if (!navDotsMenu.contains(e.target) && !navDotsButton.contains(e.target)) {
            navDotsMenu.classList.remove('active');
        }
    });
    
    // Закриваємо меню при кліку на посилання
    navDotsMenu.querySelectorAll('.nav-dots-link').forEach(link => {
        link.addEventListener('click', function() {
            navDotsMenu.classList.remove('active');
        });
    });
}

// Функція для повноекранного прелоадера
function initFullscreenPreloader() {
    const preloader = document.getElementById('fullscreenPreloader');
    const body = document.body;
    
    if (!preloader) return;
    
    // Ховаємо прелоадер через 2 секунди
    setTimeout(() => {
        preloader.classList.add('hidden');
        body.classList.add('loaded');
        
        // Видаляємо прелоадер з DOM після анімації
        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 800);
    }, 2000);
}

// Функція для перелистування сторінки вліво
        function initPageSlider() {
            const slideButton = document.getElementById('slideButton');
            const sliderContainer = document.getElementById('sliderContainer');
            const body = document.body;
            
            if (!slideButton || !sliderContainer) {
                console.log('Slide elements not found');
                return;
            }
            
            let isSlid = false;
            
            slideButton.addEventListener('click', function() {
                if (!isSlid) {
                    // Перелистуємо вліво - зсуваємо на 50% ширини контейнера
                    sliderContainer.style.transform = 'translateX(-50%)';
                    body.classList.add('slid-left');
                    slideButton.textContent = 'Повернутися назад';
                    isSlid = true;
                } else {
                    // Повертаємо назад
                    sliderContainer.style.transform = 'translateX(0)';
                    body.classList.remove('slid-left');
                    slideButton.textContent = 'Перелистнути до сертифікатів';
                    isSlid = false;
                }
            });
            
            console.log('Page slider initialized');
        }
        
// Функція для перемикання стилів слайдера
function initStyleToggle() {
    const styleToggle = document.getElementById('styleToggle');
    const comparisonSection = document.getElementById('comparisonSection');
    let isEpicStyle = true;

    if (styleToggle && comparisonSection) {
        styleToggle.addEventListener('click', function() {
            isEpicStyle = !isEpicStyle;
            
            if (isEpicStyle) {
                comparisonSection.classList.remove('simple-style');
                styleToggle.innerHTML = '<i class="fas fa-palette"></i><span>Спрощений стиль</span>';
            } else {
                comparisonSection.classList.add('simple-style');
                styleToggle.innerHTML = '<i class="fas fa-magic"></i><span>Епічний стиль</span>';
            }
        });
        
        console.log('Style toggle initialized');
    } else {
        console.log('Style toggle elements not found');
    }
}



// Функція для модального вікна сертифікатів
        function initCertificatesModal() {
            const modal = document.getElementById('certificateModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const modalDate = document.getElementById('modalDate');
            const closeBtn = document.querySelector('.modal-close');
            
            if (!modal) {
                console.log('Certificate modal elements not found');
                return;
            }
            
            // Обробник кліку на сертифікати
            document.querySelectorAll('.certificate-card').forEach(card => {
                card.style.cursor = 'pointer';
                card.addEventListener('click', function() {
                    const image = this.querySelector('img').src;
                    const title = this.querySelector('h4').textContent;
                    const description = this.querySelector('p').textContent;
                    const date = this.querySelector('.certificate-date').textContent;
                    
                    // Заповнюємо модальне вікно
                    modalImage.src = image;
                    modalImage.alt = title;
                    modalTitle.textContent = title;
                    modalDescription.textContent = description;
                    modalDate.textContent = date;
                    
                    // Показуємо модальне вікно
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Закриття по кліку на хрестик
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            // Закриття по кліку поза модального вікна
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Закриття по клавіші Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            console.log('Certificates modal initialized');
        }

        // Функція для модального вікна з ефектом перелистування
        function initSlideModal() {
            const modalTrigger = document.getElementById('modalTrigger');
            const slideModal = document.getElementById('slideModal');
            const closeModal = document.querySelector('.modal-slide-close');
            
            if (!modalTrigger || !slideModal) {
                console.log('Slide modal elements not found');
                return;
            }
            
            // Відкриття модального вікна
            modalTrigger.addEventListener('click', function() {
                slideModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Закриття модального вікна
            closeModal.addEventListener('click', function() {
                slideModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            // Закриття по кліку на затемнений фон
            slideModal.addEventListener('click', function(e) {
                if (e.target === slideModal) {
                    slideModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Закриття по Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && slideModal.classList.contains('active')) {
                    slideModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            console.log('Slide modal initialized');
        }



// Функція для калькулятора вартості
function calculatePrice() {
    // Базова ціна за м² для кожного типу прибирання
    const pricePerMeter = {
        'regular': 125,
        'general': 140,
        'after-repair': 160,
        'commercial': 120
    };

    // Отримуємо значення з форми
    const cleaningType = document.getElementById('cleaning-type').value;
    const area = parseInt(document.getElementById('area').value) || 50;
    const frequency = parseFloat(document.getElementById('frequency').value);
    
    // Визначаємо поточну мову
    const currentLang = document.documentElement.lang || 'uk';
    
    // Словник перекладів для калькулятора
    const calculatorTranslations = {
        uk: {
            'Area': 'Площа',
            'Type': 'Тип',
            'Base cost': 'Базова вартість',
            'Additional services': 'Додаткові послуги',
            'Frequency discount': 'Знижка за періодичність',
            'Regular cleaning': 'Звичайне прибирання',
            'General cleaning': 'Генеральне прибирання',
            'Post-renovation cleaning': 'Післяремонтне прибирання',
            'Commercial cleaning': 'Комерційне прибирання',
            'UAH': 'грн'
        },
        en: {
            'Площа': 'Area',
            'Тип': 'Type', 
            'Базова вартість': 'Base cost',
            'Додаткові послуги': 'Additional services',
            'Знижка за періодичність': 'Frequency discount',
            'Звичайне прибирання': 'Regular cleaning',
            'Генеральне прибирання': 'General cleaning',
            'Післяремонтне прибирання': 'Post-renovation cleaning',
            'Комерційне прибирання': 'Commercial cleaning',
            'грн': 'UAH'
        }
    };

    // Функція для перекладу
    function translate(text) {
        return calculatorTranslations[currentLang]?.[text] || text;
    }

    // Отримуємо текст типу прибирання
    let cleaningTypeText = document.getElementById('cleaning-type').options[document.getElementById('cleaning-type').selectedIndex].text;
    cleaningTypeText = translate(cleaningTypeText);
    
    // Розраховуємо базову вартість
    let basePrice = pricePerMeter[cleaningType] * area;
    
    // Додаємо додаткові послуги
    let additionalServices = 0;
    const services = [
        { id: 'windows', price: 400 },
        { id: 'fridge', price: 350 },
        { id: 'oven', price: 450 },
        { id: 'cabinets', price: 380 },
        { id: 'balcony', price: 500 }
    ];
    
    services.forEach(service => {
        if (document.getElementById(service.id).checked) {
            additionalServices += service.price;
        }
    });
    
    // Загальна вартість з урахуванням періодичності
    let totalPrice = (basePrice + additionalServices) * frequency;
    
    // Округлюємо до цілих
    totalPrice = Math.round(totalPrice);
    
    // Оновлюємо результат з правильною валютою
    const currency = currentLang === 'uk' ? ' грн' : ' UAH';
    document.getElementById('total-price').textContent = totalPrice + currency;
    
    // Деталізація розрахунку з перекладом
    let details = `
        <div style="text-align: left; font-size: 0.9rem;">
            <p>📏 ${translate('Area')}: ${area} m²</p>
            <p>🧹 ${translate('Type')}: ${cleaningTypeText}</p>
            <p>💰 ${translate('Base cost')}: ${basePrice}${currency}</p>
            ${additionalServices > 0 ? `<p>➕ ${translate('Additional services')}: ${additionalServices}${currency}</p>` : ''}
            ${frequency < 1 ? `<p>🎯 ${translate('Frequency discount')}: ${Math.round((1-frequency)*100)}%</p>` : ''}
        </div>
    `;
    
    document.getElementById('price-details').innerHTML = details;
}


        // Функція для навігації по слайдах у модальному вікні
        function initModalSlides() {
            const modal = document.getElementById('slideModal');
            const slides = document.querySelectorAll('.modal-slide');
            const prevBtn = document.querySelector('.modal-prev');
            const nextBtn = document.querySelector('.modal-next');
            const indicators = document.querySelectorAll('.modal-indicator');
            
            if (!slides.length) return;
            
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            function goToSlide(index, direction) {
                // Видаляємо класи з усіх слайдів
                slides.forEach(slide => {
                    slide.classList.remove('active', 'prev', 'next');
                });
                
                // Додаємо класи для анімації
                slides[currentSlide].classList.add(direction === 'next' ? 'prev' : 'next');
                slides[index].classList.add('active');
                
                currentSlide = index;
                
                // Оновлюємо індикатори
                indicators.forEach((indicator, i) => {
                    indicator.classList.toggle('active', i === currentSlide);
                });
            }
            
            function nextSlide() {
                const nextIndex = (currentSlide + 1) % totalSlides;
                goToSlide(nextIndex, 'next');
            }
            
            function prevSlide() {
                const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
                goToSlide(prevIndex, 'prev');
            }
            
            // Наступний слайд
            nextBtn.addEventListener('click', nextSlide);
            
            // Попередній слайд
            prevBtn.addEventListener('click', prevSlide);
            
            // Клік на індикатор
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function() {
                    const direction = index > currentSlide ? 'next' : 'prev';
                    goToSlide(index, direction);
                });
            });
            
            // Клавіатура
            document.addEventListener('keydown', function(e) {
                if (!modal.classList.contains('active')) return;
                
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            });
            
            // Swipe для мобільних пристроїв
            let startX = 0;
            let endX = 0;
            
            modal.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
            });
            
            modal.addEventListener('touchend', function(e) {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const diff = startX - endX;
                const swipeThreshold = 50;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        nextSlide(); // Swipe вліво
                    } else {
                        prevSlide(); // Swipe вправо
                    }
                }
            }
            
            console.log('Modal slides navigation initialized');
        }

        // ЄДИНИЙ обробник події DOMContentLoaded
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM loaded - initializing scripts...');
            
            // Запускаємо повноекранний прелоадер
   			 initFullscreenPreloader();
            
            // Ініціалізація перелистування сторінки
            initPageSlider();
            
            initStyleToggle(); 
            
            // Ініціалізація модального вікна сертифікатів
            initCertificatesModal();
            
            // Ініціалізація модального вікна з ефектом перелистування
            initSlideModal();
            
            // Ініціалізація навігації по слайдах
            initModalSlides();
            
            
             initSettingsModal(); 
              initAboutModal();
          
            initWorkTypesModal();
            
            
            
            
             // Інші функції запускаємо після прелоадера
    setTimeout(() => {
        
        // Ініціалізація плавного скролу
        initSmoothScroll();
        
        // Навігаційне меню
        initNavDotsMenu();
        
        // Калькулятор вартості
        const calculatorInputs = document.querySelectorAll('#cleaning-type, #area, #frequency, .checkbox-group input');
        calculatorInputs.forEach(input => {
            input.addEventListener('change', calculatePrice);
        });
        
        const calculateBtn = document.querySelector('.calculate-btn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', calculatePrice);
        }
        
        // Автоматичний розрахунок при завантаженні
        setTimeout(calculatePrice, 500);
      
      
        // Секція відгуків
        initReviewsToggle();
        
        // Лічильники
        setTimeout(animateCounters, 1000);
        
        // Галерея
        initGallerySlideshow();
        
        // Обробник скролу
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();
        
        // Бульбашки
        createBubbles();
        setInterval(createBubbles, 30000);
        
        // Анімація контенту
        initContentAnimation();
        
        
        console.log('All scripts initialized successfully!');
    }, 2100);
            
            console.log('All scripts initialized successfully!');
        });
