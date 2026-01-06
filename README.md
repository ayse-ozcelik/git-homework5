# React Product Dashboard - Assignment 1

Bu proje, temel React kavramlarını (state, props, conditional rendering ve component composition) uygulamak amacıyla geliştirilmiştir.

## Proje Yapısı ve Bileşenler
- **App.jsx**: Ana uygulama bileşeni. Kullanıcı ismini yöneten `name` state'ini ve ürün listesinin görünürlüğünü değiştiren `showProducts` state'ini içerir.
- **ProductList.jsx**: Statik bir ürün dizisini tutar ve `.map()` metodunu kullanarak ürünleri listeler.
- **Product.jsx**: Her bir ürünün başlık ve fiyat bilgisini görüntüleyen bileşendir. `Card` bileşenini sarmalayıcı olarak kullanır.
- **Card.jsx**: `children` prop'unu kullanarak içine gelen her türlü içeriği özel bir çerçeve stiliyle sarmalayan "Layout" bileşenidir.

## Uygulanan Özellikler
- **Controlled Inputs**: Kullanıcının girdiği isim anlık olarak ekrana yansıtılır.
- **Conditional Rendering**: Ürün listesi buton aracılığıyla gösterilip gizlenebilir.
- **Props & Composition**: Veriler bileşenler arasında props yoluyla aktarılmış ve bileşen sarmalama (composition) uygulanmıştır.