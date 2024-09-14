export interface myStory {
    id: number,
    tema: string,
    NewsName: string,
    NewsDate: string,
    NewsWriter: string,
    NewsCover: string,
    NewsParagraf: string
}


export const Story: myStory[] = [
    {
        id: 1,
        tema: 'world',
        NewsName: "Hindistan Ayda!",
        NewsDate: "23-08-2023",
        NewsWriter: "Vidadi Ali",
        NewsCover: "data:image/jpeg;base64,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",
        NewsParagraf: `<a href='https://www.isro.gov.in/Chandrayaan3.html' target='_blank'>Chandrayaan-3</a> programı - Hindistanın ən yeni və uğurlu nəticə verən Ay Kəşfi üçün vəzifələnmiş programadır. Bundan əvvəl də 
            <a href='https://www.isro.gov.in/' target='_blank'>ISRO</a> (Hindistan Kosmik Araştırma Mərkəzi) - tərəfindən 2 dəfə bu proqram gerçəkləşdirilmək üzrə planlaşdırılmışdı. Lakin bəzi əskikliklər ucbatından uğurlu nəticə əldə oluna bilinməmişdi. Amma Chandrayaan-3 programı vasitəsi ilə nəhayət ki, Hindistan bunu bacardı. Və beləcə Aya kosmik gəmi göndərən dördüncü ölkə oldu.
              İnsan övladı bundan əvvəl ki, 3 uçuş zamanı Ayın ancaq görünən hissəsində fəaliyyət göstərə bilmişdi. Amma Hindistan isə Ayın görünməyən tərəfinə ilk uçuş edən ölkə oldu. Bir sözlə Ayın qaranlıq, heç vaxt Günəş işığı almayan üzü.<br><br>
            Bir ilkə imza atan Hindistan Kosmik Agentliyinin Chandrayaan-3 ün Vikram gəmisi ilə yerinə yetirdiyi bu enişin 3 əsas vəzifəsinə aşağıda diqqət edək<br><br>
            1. Aya yumşaq eniş: Ayın cənub qütbündə yumşaq eniş <br>
            2. Rover Delivery: Ayın səthini araşdırmaq üçün bir rover, yəni araşdırma maşınının göndərilməsi. <br>
            3. Elmi Tədqiqat: Ayın geoloji quruluşunu, mineral tərkibini və atmosfer xüsusiyyətlərini tədqiq edən elmi təcrübələrin aparılması.<br>
             Bununla artıq Hindistan Kosmik alanda müəyyən mövqe tutan və bütün kosmik araşdırmalarda başlıca rol oynayan bir dövlətə çevrildi.
             Eniş zamanı təqdim olunan canlı yayımda Hindistanın baş naziri <a href='https://tr.wikipedia.org/wiki/Narendra_Modi'>Narendra Modi</a>nin çıxış etməsi baş tutan bu inkişafın Hindistan üçün bir çox tərəfdən, həmçinin, siyasi olaraq da çox mühim olmasının göstəricisi idi. `
    },
    {
        id: 2,
        tema: 'books',
        NewsName: "Heyvan Ferması",
        NewsDate: "01-03-2024",
        NewsWriter: "George Orwell",
        NewsCover: "https://i.pinimg.com/236x/df/74/26/df7426a73131a6330f976b38a9781344.jpg",
        NewsParagraf: ``
    },
    {
        id: 3,
        tema: 'books',
        NewsName: "Şirin portağal ağacım",
        NewsDate: "01-03-2024",
        NewsWriter: "Joze Mauru di Vaskonselos",
        NewsCover: "https://i.pinimg.com/474x/93/7f/17/937f173297b2060737ea6e3ea679cea3.jpg",
        NewsParagraf: ``
    },
    {
        id: 4,
        tema: 'books',
        NewsName: "Balaca Şəhzadə",
        NewsDate: "01-03-2024",
        NewsWriter: "Antuan de Sent-Ekzüperi",
        NewsCover: "https://i.pinimg.com/236x/86/99/89/8699892964b9f431bbc8097848813c57.jpg",
        NewsParagraf: ``
    },
    {
        id: 5,
        tema: 'books',
        NewsName: "Mən Meymunam?",
        NewsDate: "01-03-2024",
        NewsWriter: "Fransisko Ayala",
        NewsCover: "https://i.pinimg.com/236x/81/ae/79/81ae7952821c4e2a812e85bd883cd890.jpg",
        NewsParagraf: ``
    },
    {
        id: 6,
        tema: 'films',
        NewsName: "Dune 2",
        NewsDate: "11-03-2024",
        NewsWriter: "Denis Villeneuve",
        NewsCover: "https://i.pinimg.com/474x/b7/95/44/b795447414c34b18eddc91fdea0fffef.jpg",
        NewsParagraf: `Film haqqında təəssüratlarımı bölüşərkən iki fərqli yanaşmanı izləyəcəm. Bunlardan ilki 
        filmin gedişatı, ikincisi isə ötürdüyü mesajlar olacaq.

        İlk öncə xatırlayaq ki, <a href="https://tr.wikipedia.org/wiki/Frank_Herbert" target="_blank"  style = "color: aqua">Frank Herbert</a>
        in eyni adlı romanından uyarlanmış bu film özünün iki il əvvəl 
        yayımlanmış ilk bölümünün ardını ehtiva edir. Mövzu 10 min il sonra daha qaranlıq və mürəkkəb formaya 
        təkamülləşmiş dünyaları əhatə edən fantastikadır. Təkcə Dune planetini deyil, həmçinin həyatın aşkarlandığı 
        digər planetlər, onların idarəsindən məsul olan sülalələr və bu taxt savaşlarında hər zaman olduğu kimi heçə
         sayılan canlar və o canlar üçün edilən fədakarlıqları göz önündə tutulub. <br><br>
        
        Film haqqında olan fikirlərimə gəlincə isə birinci bölüm olduğu kimi, bu bölüm də gözalıcı effektlər, səs, 
        musiqi, aktyorların möhtəşəm oyun sərgiləməsi, möhtəşəm rejissor işi ilə bizi yenə özünə heyran buraxdı. 
        İstər <a href="https://tr.wikipedia.org/wiki/Timoth%C3%A9e_Chalamet" target="_blank" style = "color: aqua">Timothée Chalamet</a>, istərsə də
        <a href="https://tr.wikipedia.org/wiki/Zendaya" target="_blank"  style = "color: aqua">Zendaya</a>nın sərgilədikləri 
        aktyorluq izlədiyimiz filmin daha da çəkici olmasında mühim rol oynadı. 
        Daha irəli tarixi mövzu alıb və o tarixdə görsəlləşdirdikləri texnologiya, insanlıq təfəkkürü, idarəçilik 
        siyasəti həmçinin insanın bu zamana kimi xəyal edə bilmədiyi təchizatı bizə göstərməklə, vizuallığı bir az 
        da artırıb, izləyicini ekrana kilitləməyi bacardı. <br><br>
        
        Birinci bölüm də olduğu kimi bu bölümdə də, olduqca önəmli mesajların ötürüldüyü qənaətindəyəm ki, bu məni 
        olduqca məmnun edir.
        Din, siyasət, güvənc, güc kimi önəmli mövzuları çox gözəl çatdırmağı yenə bacardılar. Əlbət filmdə izləyib, 
        toxunulması gərəkən çox mövzu var. Mən də mənim üçün maraq kəsb edə bəzi mövzulara toxunub, qeydlərimi götürmüşəm. 
        İlk bölümdən də gördüyünüz kimi Paul heç vaxt seçilmiş şəxs olduğuna inanmamış, bunu təksib etmişdi. Bu 
        bölümdə isə Paulun ona inanan bu toplumu idarə etmək üçün, seçilmiş şəxs olduğunu açıq aşkar dilləndirdiyini
         gördük. Digər tərəfdən isə ilk bölümdə Paulun seçilmiş şəxs olduğuna inanan Leydi Jessicanı ikinci bölümdə 
         din adı altında xalqı oğluna inandırmağa çalışan bir ana xarakteri olaraq seyr etdik.
        Və Leydi Jessica bu iş üçün ən zəiflərdən başlamağın lazım olduğunu xüsusi vurğuladı və bu da günümüzü çox 
        tanış verən bir səhnə olaraq yaddaşımda qaldı. <br><br>
        
        Digər yandan isə bu yersiz inanclar, o inancların gətirdiyi acı və hər şeyi məhv edəcək gücə qarşı dirənən 
        Chanini izlədik. Chani bir səhnədə bağırıraraq “İnancımız bizi kölələşdirir” söylədi. Bəlkə də burada 
        siyasətən inancımızdan istifadə edib, bizi kölələşdirən bir dünyada yaşadığımızı bu film bizə xatırlatmaq 
        istədi. BU cümləni qururam, çünki, oxşar səhnəni kral və qızının söhbətində müşahidə edə bildik. Princess 
        Irulan atasına bənzər ifadələri söylədi: “İnanan bir toplumun əlindən peyğəmbəri alınarsa, bu o toplumu daha 
        da iradəli, inadkar edər. Yox əgər bir dini sıxıb, yox etməyə çalışarsansa, o daha da tez yayılar. Bir az 
        boş burax, istədiklərini ver. İnanclarından istifadə et və onunla bu toplumu idarə et”. <br><br>
        
        Ən böyük dəyişimi isə Paulda gördük. İkinci bölümdə qarşımızda fəqli bir Paul var idi, və bu Paul peyğəmbər 
        olmadığını bilərək, Cənnətin var olmadığından əmin ikən, tərəfdaşlarına Cənnət vədi verirdi. Çünki Fərqinə 
        varmışdı ki, bir toplumu məcburi yox, könüllü olaraq bir işə cəlb etsən daha çox uğur qazanarsan. Toplumun 
        könüllü olaraq ölümə belə gedəcəyi tək mövzu isə hər zaman inanc olmuşdur.  <br><br>
        
        Ən son parçada isə Paulun qazandığı güc və gücün ona etdirdiyi əməlləri gördük. Etmərəm dediyi hər bir şeyi 
        edən Paul ilk öncə özünə, sonra isə Chaniyə xəyanət etdi. 
        Və düşünürəm ki, yuxarıda söylədiyim və digər söylədiklərim qədər önəmli mövzularda özümüzü ömrümüz boyu 
        sorğulamağımız ən düzgün qərarımız olacaqdır… <br><br>
        
        Film haqqında məni rahatsız edən fikirlə gəlincə isə aşağıdakıları söyləyə bilərəm, hansı ki, o səbəblər 
        ümumi gedişatı birinci bölümə nəzərən daha durğun hiss etdirdi.
        Bu səbəblərdən əsası isə birinci bölümdən fərqli olaraq həyəcan verici səhnələrin ancaq son 1 saata 
        yerləşdirilməsi ola bilər. Bu da 3 saatlıq bir filmin ilk iki saatının daha durğun keçməsi ilə nəticələnir.
        Məna verə bildiyim ikinci mövzu isə soxulcanlar oldu. <br><br>
        İlk bölümdə bizim üçün bir vəhşi canavar olaraq təsvir etdikləri soxulcanları çöl adamlarının əhilləşdirilmiş
         heyvanı kimi ikinci bölümdə qarşımıza çıxartdılar və bu böyük, vəhşi canavarın yəhəri isə sadəcə 2 balaca 
         qırmaq oldu və bu qırmaqlar elə təsvir olundu ki, bir soxulcana nəin ki, minməyi həmçinin o soxulcan ilə 
         10-larla çöl adamının bir dəvə kimi istifadə edib, qumluqda uzun yol almalarını təşkil etmək mümkün oldu.
        Bu ayrıntı mənə olduqca çox abartılı və ssenari çarəsizliyi kimi gəldi və bəlkə də ilk saatlarda filmin mənim
         üçün daha durğun keçməsinə zəmin yaratdı.
         <br><br>
        Bənzərliklər: 
        Filmdə hiss etdiyim ən böyük bənzərlik Avatar 1 filmi ilə oldu. Paulun yerli əhali tərəfindən yetişdirilməsi, 
        xalqın bir parçası olmaq üçün özünü onlara sübut etməyə çalışması, həmçinin yerli xalqın çəkindiyi, amma ölmü 
        gözə alıb, əhilləşdirməyə çalışdıqları bir heyvanı Paulun minərək, özünün seçilmiş şəxs olduğu haqqında yerli 
        əhalidə fikir yaratması kimi səhnələri Avatara 1 ə bənzətməməyim mümkün olmazdı. Hansı ki, orada da ən yadda 
        qalan parça Jake'in Turok Maktonu idarə etməsi idi.
        <br><br>
        Mənə görə belə bənzərliklər, birinci bölümə nisbətən daha həyəcansız irəliləmə və s. kimi səbəblər olsa da, 
        sinemada izlənməsi gərəkən ən möhtəşəm filmlər siyahısının top 5-ində qəraralaşar deyə biləcəyimiz bir parça 
        izlədik. Film hər yönü ilə bizi özünə bağlamağı bacardı. Bütün komanda böyük bir təşəkkürə layiqdir və bu gün 
        bizlər bu fikirləri bir birimizi ötürürüksə, demək ki,  layiq olduqlarını biz də onlara hiss etdiririk.
        `
    },
    {
        id: 7,
        tema: 'films',
        NewsName: "Hidden Figures",
        NewsDate: "13-03-2024",
        NewsWriter: "Theodore Melfi",
        NewsCover: "https://upload.wikimedia.org/wikipedia/en/4/4f/The_official_poster_for_the_film_Hidden_Figures%2C_2016.jpg",
        NewsParagraf: `“Hidden Figures”, yəni, “Gizli Kodlar” - çoxdandır izləyəcəklərim siyahısında olan bu film
        2016-ci ildə vizyona girməsinə baxmayaraq nəhayət ki, dünən izləyə bildim. Və dərhal gəlib, fikirlərimi 
        bölüşmək istədim. 
        <br>
        Hardan başlayım bilmirəm. Film o qədər möhtəşəm idi ki, hələ də təsirindən çıxa bilməmişəm.
        Bəlkə də yazdığım bu təəssüratlarım sizə abartılı gələcək. Bu səfərlik həyəcanıma verin. Filmdə 
        məni özünə heyran buraxan çoxlu detallar var idi. İlk öncə filmin mövzusundan kiçik bir giriş etmək istəyirəm.
        Rejissorluğu <a href='https://en.wikipedia.org/wiki/Theodore_Melfi' target="_blank" style = "color: aqua">Theodore Melfi</a> 
        tərəfindən üstənmiş olan bu film 
        <a href='https://en.wikipedia.org/wiki/Margot_Lee_Shetterly'  target="_blank" style = "color: aqua">Margot Lee Shetterly</a>-nin
        eyni adlı kitabına əsasən çəkilmişdir. Filmin ana mövzusu America və SSRİ-nin bir-biri ilə
        yarışaraq  təşkil etdikləri kosmik əməliyyatlarda bizim görmədiyimiz, tanımadığımız arxa plandakı 
        qəhramanların həyatlarını bizlərə çatdırmaq idi və ən təsirli yanı isə gerçək həyat hekayələrinə dayanaraq
        3 ana xarakteri bizə çox möhtəşəm şəkildə çatdırması oldu. Baş rollarını 
        <a href='https://en.wikipedia.org/wiki/Octavia_Spencer'  target="_blank" style = "color: aqua">Octavia Spencer</a>,
        <a href='https://en.wikipedia.org/wiki/Taraji_P._Henson'  target="_blank" style = "color: aqua"> Taraji P. Henson</a>
        və <a href='https://en.wikipedia.org/wiki/Janelle_Mon%C3%A1e'  target="_blank" style = "color: aqua">Janelle Monáe</a> 
        oynadığı Hidden Figures filmi NASA-nın iş prosesini bizə göstərir.  İrqçiliyin daha kəskin 
        olduğu dönəmdə Amerikada NASA kimi bir şirkətdə çalışan 3 Afrika əsilli qadının verdiyi həyat mücadiləsi və 
        zorluqlara rəğmən yüksəlişi filmin əsas mövzusudur. Məni ən çox filmə bağlayan əsas faktor irqçilik idi. 
        Hər zaman irq ayrımının olduğu mövzular gündəmdə olmuş, bu mövzu ilə bağlı xəbərlər oxuyub, izləmişik. 
        Əsasən də Amerikada baş verənlərlər ilə bağlı. Amma bu film o xəbərlərdən də bir addım irəli keçdi. 
        O duyğuları, zorluqları bir-bir hiss etməyimizi təmin etdi. İnsanların qaradərili olması səbəbindən məruz
        qaldıqları min-bir zorbalığı,  təqqirləri əks etdirən film ətrafımızda baş verənləri daha yaxşı alqılamağımıza
        səbəb oldu. Taraji P. Henson - nın həyat verdiyi 
        <a href='https://en.wikipedia.org/wiki/Katherine_Johnson'  target="_blank" style = "color: aqua">Creola Katherine Johnson</a>
        xarakteri bu filmin əsas qəhrəmanı 
        idi desək yanılmarıq. Qaradərili olduğu üçün istər cəmiyyətdə, istərsə də iş mühitində çoxlu zorbalığa 
        məruz qalan Katherine çox güclü riyaziyyat və məntiqə sahib olan biri idi. O qədər güclü bir riyaziyyatçı 
        idi ki, üzərində çalışılan əməliyyatda astronom vəsifəsini üstlənmiş olan 
        <a href='https://en.wikipedia.org/wiki/John_Glenn'  target="_blank" style = "color: aqua">John Glenn</a> xarakteri 1960-larda 
        yeni istifadə olunan komputer nəslinə, IBM, güvənməyərək, “ancaq Katherine riyazi hesablamalardan əmin olarsa, bu 
        uçuşu qəbul edərəm” demişdi. Və həqiqətən də o dövr üçün yeni nəsil olan kompüterin hesablamalarını Katherine 
        təsdiq etdikdən sonra, John Glenn uçuşa razılıq verir və biz bu tarixi hadisəni filmdə olduğu kimi izləyirik. 
        Filmdə Katherine xarakterini öz işi ilə bağlı hər hansı əziyyət çəkməsi deyil, hər zaman rəngindən dolayı 
        yorulduğu açıq şəkildə bizə çatdırılır. Filmdə  Katherine ilə bağlı mənə ən çox təsir edən səhnə isə tualet 
        səhnəsi idi. Ötdüyümüz əsrdə Amerikada irq ayrımı o qədər insanlıq xarici bir durumda yayılırdı ki, 
        qaradərili şəxslərin kənarlaşdırlması üçün avtobusdakı oturacaqlardan tutmuş, kitabxanlara kimi hər bir 
        bölüm “colored” - “rəngli” olaraq ayrılmışdı, həmçinin ortaq tualetlər belə. Tualetə getmək üçün hər gün 
        2 km məsafə qətt etməyə məcbur olan Katherine durumdan bezərək, gerçəkləri hayqırması NASA-da bu ayrımın 
        qaldırılmasının başlanğıcı oldu. <br> 
        Güclü riyaziyyatçı olan  Katherine verdiyi mücadilə ilə yanaşı yoldaşı, Janelle Monáe-nın
        həyat verdiyi  <a href='https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)'  target="_blank" style = "color: aqua">Mary Jackson</a>
        xarakteri olmuşdur ki, bu xarakter riyaziyyatçı olmaqla yanaşı 
        NASA-da işləyən ilk qaradərili qadın mühəndis olmağı da bacarmışdı. Ancaq ağ dərili kişilərin yazıla biliyi kursu 
        əldə edən Mary Jackson karyerində elə bir yüksəlişə çatdı ki, NASA-da 34 il çalışandan sonra belə Amerikanın ən 
        bacarıqlı mühəndislərindən  biri olaraq yadda qaldı. <br>
        Digər yandan isə Octavia Spencer həyat verdiyi riyaziyyatçı  
        <a href='https://en.wikipedia.org/wiki/Dorothy_Vaughan' target="_blank" style = "color: aqua">Dorothy Vaughan</a>
        xarakterini izləmiş olduq. Olduqca əzmkar, bacarıqlı olan Dorothy IBM kompüterlərinin 
        çalışdırlması, həmçini çalışdırılmasında məsul olan komandanın idarəsində əsas vəzifəni üstənmişdi. 
        <br><br>
        Hidden Figures filmi qaradərili və qadın olan bu 3 xarakterin NASA kimi bir şirkətdə etdikləri yüksəlişi 
        bizə göstərməklə yanaşı, amerikalıların qaradərili insanlara bir insan kimi baxmadıqları bir dünyanı da bizə 
        hər bir kiçik detayı ilə, acı dolu hislərlə çatdırmağı bacardı. Filmin insan olmağın, irq, cinsiyyət ayrımı 
        etmədən yüksəliş üçün bir olmağın necə mühim amillər olması ilə bağlı göndərdiyi mesajlar mənim üçün olduqca 
        önəmli idi. Film haqqımda bu yazdıqlarım isə sadəcə aysberqin görünən tərəfidir. Odur ki, bütün aysberqi görməyiniz 
        üçün  bu filmi izləməyi şiddətlə tövsiyyə edirəm. 
        `
    }
]

Story.reverse();



export interface myProject {
    id: number,
    name: string,
    link: string
}


export const Project: myProject[] = [
    {
        id: 8,
        name: "Song Festival",
        link: "https://vidadiali.github.io/song-festival"
    },
    {
        id: 7,
        name: "fline",
        link: "https://vidadiali.github.io/fline"
    },
    {
        id: 6,
        name: "artcenter",
        link: "https://artcenter.az"
    },
    {
        id: 9,
        name: "Musiqi Platformu",
        link: "https://vidadiali.github.io/escmusic"
    },
    {
        id: 5,
        name: "Şəxsi Portfolio I",
        link: "https://orkhan-alibayli.com"
    },
    {
        id: 4,
        name: "Qəsəbə Kitab Evi",
        link: "https://qesebekitabevi.com"
    },
    {
        id: 3,
        name: "Öncəki səhifəm",
        link: "https://vidadiali.github.io/vidadiali/"
    },
    {
        id: 1,
        name: "The Voice Of EuroFans - ODDS",
        link: "https://vidadiali.github.io/tvef-odds"
    },
    {
        id: 10,
        name: "5 Nömrəli Peşə Məktəbi",
        link: "https://vidadiali.github.io/medeniyyet-ve-sentkarliq-komputer-groups"
    },
    {
        id: 2,
        name: "fline",
        link: "https://fline.az"
    },
]


export interface myOneTwo {
    id: number,
    name: string,
    text: string,
    date: string
}

export const OnesTwo: myOneTwo[] = [
    {
        id: 1,
        name: "Biz bir ailəyik?",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod veritatis id debitis dolorem quam accusamus minus ipsum? 
        Animi quibusdam quae, quia sapiente laborum saepe dolorum totam at recusandae illum corporis!`,
        date: "string"
    },
    {
        id: 2,
        name: "Biz bir ailəyik?",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod veritatis id debitis dolorem quam accusamus minus ipsum? 
        Animi quibusdam quae, quia sapiente laborum saepe dolorum totam at recusandae illum corporis!`,
        date: "string"
    },
    {
        id: 3,
        name: "Biz bir ailəyik?",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod veritatis id debitis dolorem quam accusamus minus ipsum? 
        Animi quibusdam quae, quia sapiente laborum saepe dolorum totam at recusandae illum corporis!`,
        date: "string"
    }
]