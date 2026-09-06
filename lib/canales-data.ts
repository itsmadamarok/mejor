// lib/channels-data.ts

export interface Channel {
  name: string;
  quality: '4K UHD' | 'FHD 60FPS' | 'HD';
  genre?: string;
  description: string;
  popularity?: number;
  isFeatured?: boolean;
  country?: string;
  logo?: string;
  category?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChannelCategory {
  slug: string;
  name: string;
  totalChannels: number;
  description: string;
  longDescription?: string;
  keywords: string[];
  channels: Channel[];
  faqs: FAQItem[];
  featuredChannels?: Channel[];
  pageTitle?: string;
  metaDescription?: string;
  heroImage?: string;
}

export const channelsData: ChannelCategory[] = [
  {
    slug: 'sport',
    name: 'Deporte en Directo & PPV',
    totalChannels: 1450,
    pageTitle: 'Canales de Deporte en Directo & PPV | La Mejor Selección IPTV',
    metaDescription: 'Disfruta de LaLiga, Champions League, Fórmula 1, UFC y todos los deportes en directo con calidad 60FPS. Más de 1450 canales deportivos en IPTV.',
    description: 'Disfruta de todos los partidos deportivos y eventos en directo con fluidez de 60FPS. Incluye Movistar LaLiga, DAZN LaLiga, Movistar Liga de Campeones, Eurosport, ESPN, Sky Sports y todos los grandes eventos mundiales de UFC y Boxeo PPV.',
    longDescription: 'Nuestra selección de canales deportivos es la más completa del mercado. Con más de 1450 canales, podrás seguir todos los partidos de LaLiga EA Sports, Premier League, Serie A, Bundesliga y las competiciones europeas. Además, disfruta de la Fórmula 1, MotoGP, UFC, Boxeo PPV y todos los deportes de élite en calidad Full HD y 60FPS sin cortes ni buffering. Ideal para los amantes del deporte que no quieren perderse ni un solo evento.',
    keywords: [
      'IPTV Deporte Ver Online',
      'Movistar LaLiga IPTV Stream',
      'DAZN LaLiga IPTV',
      'Liga de Campeones Live Stream',
      'Ver Formula 1 IPTV España',
      'LaLiga EA Sports Live Stream',
      'Premier League Live Stream',
      'UFC PPV IPTV España',
      'Champions League IPTV Ver'
    ],
    channels: [
      { name: 'Movistar LaLiga HD', quality: 'FHD 60FPS', genre: 'LaLiga EA Sports', description: 'Cobertura completa de los partidos de la máxima categoría del fútbol español con la mejor calidad de imagen.', popularity: 98, isFeatured: true },
      { name: 'DAZN LaLiga HD', quality: 'FHD 60FPS', genre: 'Fútbol Español', description: 'Emisión exclusiva de encuentros semanales de LaLiga, análisis previos y postpartido.', popularity: 95, isFeatured: true },
      { name: 'Movistar Liga de Campeones 1', quality: 'FHD 60FPS', genre: 'UEFA Champions League', description: 'Canal principal para los duelos europeos de la UEFA Champions League, Europa League y Conference League.', popularity: 97, isFeatured: true },
      { name: 'DAZN F1 España', quality: 'FHD 60FPS', genre: 'Fórmula 1 & Motor', description: 'Emisión en directo 24/7 de los libres, clasificaciones y Grandes Premios de Fórmula 1 con comentarios en español.', popularity: 92, isFeatured: true },
      { name: 'Eurosport 1 HD', quality: 'FHD 60FPS', genre: 'Ciclismo & Tenis', description: 'Grandes Vueltas ciclistas, Grand Slams de tenis y deportes de invierno en alta definición.', popularity: 88 },
      { name: 'Eurosport 2 HD', quality: 'FHD 60FPS', genre: 'Deportes de Resistencia', description: 'Competiciones europeas, snooker, automovilismo y eventos multideportivos.', popularity: 82 },
      { name: 'Movistar Deportes 1', quality: 'FHD 60FPS', genre: 'ACB & Baloncesto', description: 'Liga Endesa de baloncesto, Euroliga y grandes eventos de polideportivo.', popularity: 85 },
      { name: 'Movistar Golf', quality: 'FHD 60FPS', genre: 'PGA Tour & Majors', description: 'Torneos internacionales de golf, Ryder Cup y circuitos profesionales.', popularity: 75 },
      { name: 'DAZN 1 Bar HD', quality: 'FHD 60FPS', genre: 'MotoGP & Boxeo', description: 'Mundial de Motociclismo al completo, grandes veladas de boxeo y combates internacionales.', popularity: 90 },
      { name: 'UFC Fight Pass Live', quality: 'FHD 60FPS', genre: 'MMA & Deportes de Contacto', description: 'Carteleras preliminares y eventos estelares de la UFC en directo sin cortes.', popularity: 93, isFeatured: true },
      { name: 'Sky Sports Main Event', quality: 'FHD 60FPS', genre: 'UK Premier League', description: 'Cobertura británica de los mejores encuentros de fútbol internacional y grandes eventos deportivos.', popularity: 87 },
      { name: 'TNT Sports 1 Ultimate', quality: 'FHD 60FPS', genre: 'Champions & Rugby', description: 'Señales premium para torneos de la UEFA y grandes citas del rugby internacional.', popularity: 80 },
      { name: 'ESPN Latinoamérica', quality: 'FHD 60FPS', genre: 'Deportes Internacionales', description: 'Cobertura de deportes americanos y eventos internacionales.', popularity: 84 },
      { name: 'Fox Sports España', quality: 'FHD 60FPS', genre: 'Deportes', description: 'Análisis y retransmisiones deportivas de primer nivel.', popularity: 78 },
      { name: 'Canal+ Deportes', quality: 'FHD 60FPS', genre: 'Premium', description: 'Eventos deportivos exclusivos y contenido premium.', popularity: 89 },
      { name: 'Gol Play HD', quality: 'FHD 60FPS', genre: 'Fútbol', description: 'Partidos de fútbol en abierto y resúmenes.', popularity: 76 },
      { name: 'Telecinco Deportes', quality: 'FHD 60FPS', genre: 'Deportes', description: 'Programas deportivos y eventos en directo.', popularity: 72 },
      { name: 'Real Madrid TV', quality: 'HD', genre: 'Fútbol', description: 'Contenido exclusivo del Real Madrid.', popularity: 81 },
      { name: 'FC Barcelona TV', quality: 'HD', genre: 'Fútbol', description: 'Todo sobre el FC Barcelona 24/7.', popularity: 80 },
      { name: 'Gol TV', quality: 'FHD 60FPS', genre: 'Fútbol', description: 'Cobertura internacional de fútbol.', popularity: 79 },
      { name: 'NBA TV', quality: 'FHD 60FPS', genre: 'Baloncesto', description: 'Partidos de la NBA y contenido exclusivo.', popularity: 86 },
      { name: 'NFL Network', quality: 'FHD 60FPS', genre: 'Fútbol Americano', description: 'Todo sobre la NFL en directo.', popularity: 77 },
      { name: 'MLB Network', quality: 'FHD 60FPS', genre: 'Béisbol', description: 'Grandes Ligas de Béisbol.', popularity: 73 },
      { name: 'Rugby Pass TV', quality: 'FHD 60FPS', genre: 'Rugby', description: 'Competiciones internacionales de rugby.', popularity: 70 },
      { name: 'Eurosport 1', quality: 'FHD 60FPS', genre: 'Multideporte', description: 'Ciclismo, tenis y deportes de invierno.', popularity: 84 },
      { name: 'Eurosport 2', quality: 'FHD 60FPS', genre: 'Multideporte', description: 'Más deportes de primer nivel.', popularity: 79 },
      { name: 'Sport 1', quality: 'FHD 60FPS', genre: 'Deportes', description: 'Eventos deportivos alemanes e internacionales.', popularity: 71 },
      { name: 'Vamos HD', quality: 'FHD 60FPS', genre: 'Deportes', description: 'Cobertura deportiva de Movistar+.', popularity: 83 },
      { name: 'Movistar F1', quality: 'FHD 60FPS', genre: 'Fórmula 1', description: 'Todo sobre la Fórmula 1 24/7.', popularity: 85 },
      { name: 'DAZN 1', quality: 'FHD 60FPS', genre: 'Multideporte', description: 'Cobertura multideporte de DAZN.', popularity: 82 }
    ],
    faqs: [
      { question: '¿Puedo ver LaLiga y la Fórmula 1 sin cortes ni retardo?', answer: 'Sí, nuestros servidores deportivos dedicados utilizan conexiones de alta tasa de bits a 60fps con mínima latencia para que disfrutes sin interrupciones.' },
      { question: '¿Hay que pagar extra por los eventos de UFC o Boxeo PPV?', answer: 'No, todos los grandes eventos de pago por visión (UFC, Boxeo, WWE) están incluidos sin coste adicional en todos nuestros planes.' },
      { question: '¿Dispone de función de grabadora o retroceso para partidos pasados?', answer: 'Sí, para prácticamente todos los canales deportivos ofrecemos función de retroceso de 7 días y guía EPG automática.' }
    ]
  },
  {
    slug: 'espana',
    name: 'Canales de España',
    totalChannels: 220,
    pageTitle: 'Canales de TV Española | IPTV con La 1, Antena 3, Telecinco y más',
    metaDescription: 'Disfruta de todos los canales de televisión españoles en Full HD con 7 días de retroceso. Incluye La 1, La 2, Antena 3, Telecinco, La Sexta y todas las cadenas autonómicas.',
    description: 'La oferta más completa de canales de televisión nacionales públicos y comerciales de España en calidad Full HD, con 7 días de retroceso y EPG.',
    longDescription: 'Disfruta de la mejor televisión española con nuestra selección premium de canales nacionales y autonómicos. Incluye todas las cadenas generalistas como La 1, Antena 3, Telecinco y La Sexta, además de canales temáticos como Neox, Nova, Energy y Paramount Network. También encontrarás las principales televisiones autonómicas como Telemadrid, TV3, Canal Sur y muchas más. Todo en calidad Full HD 60FPS con 7 días de programación retroactiva.',
    keywords: [
      'Canales de España IPTV',
      'Ver TV Española Online',
      'La 1 La 2 Antena 3 IPTV',
      'Telecinco La Sexta Cuatro IPTV',
      'Televisión Española IPTV Pack',
      'Ver TDT España IPTV'
    ],
    channels: [
      { name: 'La 1 HD', quality: 'FHD 60FPS', genre: 'Televisión Pública', description: 'Canal generalista de Televisión Española con Telediario, grandes eventos y cine.', popularity: 98, isFeatured: true },
      { name: 'La 2 HD', quality: 'FHD 60FPS', genre: 'Cultura & Documentales', description: 'Documentales de naturaleza, cine clásico, cultura y espacios de divulgación.', popularity: 92, isFeatured: true },
      { name: 'Antena 3 HD', quality: 'FHD 60FPS', genre: 'Televisión Generalista', description: 'Antena 3 Noticias, El Hormiguero, series de éxito y entretenimiento familiar.', popularity: 97, isFeatured: true },
      { name: 'Cuatro HD', quality: 'FHD 60FPS', genre: 'Entretenimiento & Actualidad', description: 'Programas de investigación, telerrealidad y formatos de entretenimiento dinámicos.', popularity: 85 },
      { name: 'Telecinco HD', quality: 'FHD 60FPS', genre: 'Comercial Líder', description: 'Informativos Telecinco, magacines de actualidad, realities y grandes debates.', popularity: 95, isFeatured: true },
      { name: 'La Sexta HD', quality: 'FHD 60FPS', genre: 'Actualidad & Debate', description: 'Programas de análisis político, actualidad diaria e información en directo.', popularity: 93, isFeatured: true },
      { name: 'Gol Play HD', quality: 'FHD 60FPS', genre: 'Deporte en Abierto', description: 'Fútbol en abierto, resúmenes de LaLiga y competiciones multideporte.', popularity: 80 },
      { name: 'FDF HD', quality: 'FHD 60FPS', genre: 'Series & Comedias', description: 'Repeticiones de comedias de éxito y series nacionales e internacionales.', popularity: 78 },
      { name: 'Neox HD', quality: 'FHD 60FPS', genre: 'Jóvenes & Sitcoms', description: 'Series juveniles, animación para adultos y comedias de culto.', popularity: 82 },
      { name: 'Nova HD', quality: 'FHD 60FPS', genre: 'Telenovelas & Drama', description: 'Grandes éxitos de ficción, telenovelas internacionales y cine romántico.', popularity: 76 },
      { name: 'Energy HD', quality: 'FHD 60FPS', genre: 'Series Policiales', description: 'Maratones de investigaciones forenses, CSI y series de misterio.', popularity: 74 },
      { name: 'Paramount Network España', quality: 'FHD 60FPS', genre: 'Cine en Abierto', description: 'Emisión continua de películas de todos los géneros y bloques temáticos.', popularity: 86 },
      { name: 'DKiss HD', quality: 'FHD 60FPS', genre: 'Lifestyle & Realities', description: 'Docu-realities médicos, de reformas y estilo de vida.', popularity: 71 },
      { name: 'Mega HD', quality: 'FHD 60FPS', genre: 'Documentos & Motor', description: 'Programas de motor, documentales de investigación y formatos de misterio.', popularity: 79 },
      { name: 'Telemadrid HD', quality: 'FHD 60FPS', genre: 'Televisión Autonómica', description: 'Información de proximidad, actualidad y entretenimiento de la Comunidad de Madrid.', popularity: 84 },
      { name: 'TV3 Cataluña HD', quality: 'FHD 60FPS', genre: 'Televisión Autonómica', description: 'Canal autonómico principal de Cataluña con magacines y informativos.', popularity: 88 },
      { name: 'Canal Sur Andalucía HD', quality: 'FHD 60FPS', genre: 'Televisión Autonómica', description: 'Programación regional andaluza con informativos y entretenimiento.', popularity: 82 },
      { name: 'TVG Galicia HD', quality: 'FHD 60FPS', genre: 'Televisión Autonómica', description: 'Canal autonómico gallego con contenido cultural y actualidad.', popularity: 78 },
      { name: 'ETB País Vasco HD', quality: 'FHD 60FPS', genre: 'Televisión Autonómica', description: 'Programación en euskera y castellano del País Vasco.', popularity: 76 },
      { name: 'Canal 9 Mediterráneo', quality: 'FHD 60FPS', genre: 'Televisión Autonómica', description: 'Información y entretenimiento de la Comunidad Valenciana.', popularity: 73 },
      { name: 'TDT1 HD', quality: 'FHD 60FPS', genre: 'Generalista', description: 'Programación generalista con entretenimiento familiar.', popularity: 70 },
      { name: 'TDT2 HD', quality: 'FHD 60FPS', genre: 'Generalista', description: 'Segunda señal de TDT con programación alternativa.', popularity: 68 }
    ],
    faqs: [
      { question: '¿Puedo ver los canales españoles desde fuera de España?', answer: 'Sí, nuestras emisiones IPTV funcionan a nivel mundial sin restricciones geográficas ni bloqueos IP.' },
      { question: '¿Los canales de televisión nacional vienen con su programación al día?', answer: 'Sí, la guía electrónica de programas (EPG) se actualiza de forma automatizada cada pocas horas.' },
      { question: '¿Se pueden ver las cadenas autonómicas regionales?', answer: 'Por supuesto, incluimos las principales cadenas autonómicas de España dentro del paquete estándar.' }
    ]
  },
  {
    slug: 'latinoamerica',
    name: 'Canales de Latinoamérica',
    totalChannels: 380,
    pageTitle: 'Canales de TV Latinoamericana | IPTV México, Argentina, Colombia y más',
    metaDescription: 'Disfruta de los mejores canales de TV de Latinoamérica: Televisa, TV Azteca, Telefe, Caracol, Univision y más en calidad Full HD.',
    description: 'La más amplia selección de canales generalistas, de noticias y entretenimiento de toda Hispanoamérica en calidad Full HD.',
    longDescription: 'Explora nuestra colección de canales latinoamericanos con contenido premium de México, Argentina, Colombia, Chile, Perú y más países hispanohablantes. Incluye telenovelas, realities, noticias y programas de entretenimiento de los principales canales como Televisa, TV Azteca, Telefe, Caracol, RCN y Univision. Perfecto para mantenerte conectado con la cultura y actualidad de Latinoamérica.',
    keywords: [
      'Canales Latinos IPTV',
      'TV de Mexico Argentina Colombia IPTV',
      'Televisa Univision IPTV Stream',
      'Noticieros Latinos En Vivo',
      'IPTV Latinoamerica Completo'
    ],
    channels: [
      { name: 'Las Estrellas HD', quality: 'FHD 60FPS', genre: 'México & Entretenimiento', description: 'El canal líder de entretenimiento y telenovelas de Televisa.', popularity: 98, isFeatured: true },
      { name: 'TV Azteca Uno HD', quality: 'FHD 60FPS', genre: 'México', description: 'Magacines, reality shows y producciones originales de México.', popularity: 90, isFeatured: true },
      { name: 'TV Azteca 7 HD', quality: 'FHD 60FPS', genre: 'México', description: 'Entretenimiento, películas y programas juveniles de TV Azteca.', popularity: 85 },
      { name: 'Telefe Internacional HD', quality: 'FHD 60FPS', genre: 'Argentina', description: 'Ficción, entretenimiento y noticias desde Buenos Aires.', popularity: 95, isFeatured: true },
      { name: 'El Trece TV HD', quality: 'FHD 60FPS', genre: 'Argentina', description: 'Contenido de entretenimiento, series y programas de gran audiencia.', popularity: 92, isFeatured: true },
      { name: 'Caracol Televisión HD', quality: 'FHD 60FPS', genre: 'Colombia', description: 'Dramas, series de alta factura y programas insignia de Colombia.', popularity: 96, isFeatured: true },
      { name: 'RCN Nuestra Tele HD', quality: 'FHD 60FPS', genre: 'Colombia', description: 'Noticias, telenovelas y programación variada para el público internacional.', popularity: 88 },
      { name: 'Univision USA HD', quality: 'FHD 60FPS', genre: 'Hispano EE.UU.', description: 'Entretenimiento y noticias en español para la comunidad hispana en Estados Unidos.', popularity: 94, isFeatured: true },
      { name: 'Telemundo Internacional HD', quality: 'FHD 60FPS', genre: 'Hispano EE.UU.', description: 'Series de ficción, alfombras rojas y producciones estelares.', popularity: 93, isFeatured: true },
      { name: 'CNN en Español', quality: 'FHD 60FPS', genre: 'Noticias Internacionales', description: 'Información global y análisis político ininterrumpido en español.', popularity: 89 },
      { name: 'TNT Sports Latino', quality: 'FHD 60FPS', genre: 'Fútbol Latinoamericano', description: 'Cobertura de ligas sudamericanas y competiciones continentales.', popularity: 86 },
      { name: 'Canal 13 Chile HD', quality: 'FHD 60FPS', genre: 'Chile', description: 'Entretenimiento y programas de actualidad de Chile.', popularity: 84 },
      { name: 'TVN Chile HD', quality: 'FHD 60FPS', genre: 'Chile', description: 'Televisión pública chilena con informativos y cultura.', popularity: 82 },
      { name: 'América TV Argentina', quality: 'FHD 60FPS', genre: 'Argentina', description: 'Programas de entretenimiento y realities argentinos.', popularity: 79 },
      { name: 'Azteca Trece', quality: 'FHD 60FPS', genre: 'México', description: 'Segunda señal de TV Azteca con programación variada.', popularity: 77 },
      { name: 'Pasiones TV', quality: 'HD', genre: 'Telenovelas', description: 'El mejor canal de telenovelas clásicas y modernas.', popularity: 81 },
      { name: 'Golden TV', quality: 'FHD 60FPS', genre: 'Entretenimiento', description: 'Cine y series de calidad internacional.', popularity: 75 },
      { name: 'TV Pública Argentina', quality: 'FHD 60FPS', genre: 'Argentina', description: 'Televisión pública de Argentina con contenido cultural.', popularity: 72 },
      { name: 'Canal 4 Uruguay', quality: 'HD', genre: 'Uruguay', description: 'Programación uruguaya con actualidad y entretenimiento.', popularity: 68 },
      { name: 'Canal 5 Honduras', quality: 'HD', genre: 'Centroamérica', description: 'Entretenimiento y noticias de Centroamérica.', popularity: 66 }
    ],
    faqs: [
      { question: '¿Están disponibles los canales en horario local?', answer: 'Sí, ofrecemos canales con las señales directas de los principales países de origen de Latinoamérica.' },
      { question: '¿Se requiere antena parabólica o instalación especial?', answer: 'No, solo necesitas una conexión a internet estable y cualquier aplicación IPTV compatible.' }
    ]
  },
  {
    slug: 'films-series',
    name: 'Biblioteca de Cine & VOD',
    totalChannels: 450,
    pageTitle: 'Películas y Series en IPTV | Más de 60.000 títulos en VOD',
    metaDescription: 'Acceso ilimitado a más de 60.000 películas de estreno y series completas. Incluye HBO, Netflix, Disney+ y contenido exclusivo en Full HD.',
    description: 'Acceso a más de 60.000 películas de estreno y temporadas completas de las principales plataformas de streaming en Full HD con audio y subtítulos en español.',
    longDescription: 'Disfruta de nuestra gigantesca biblioteca de cine y series con más de 60.000 títulos disponibles bajo demanda (VOD). Encuentra los últimos estrenos de Hollywood, series originales de HBO, Netflix y Disney+, clásicos del cine y documentales de calidad. Todo en Full HD 60FPS con audio en español y subtítulos opcionales. Actualización diaria con los contenidos más populares de las plataformas de streaming.',
    keywords: [
      'IPTV Películas en Español',
      'VOD Cine Audio Latino y Español',
      'Series de Streaming IPTV',
      'Netflix HBO Disney en IPTV',
      'Estrenos de Cine VOD IPTV'
    ],
    channels: [
      { name: 'Cinema Estrenos España', quality: 'FHD 60FPS', genre: 'Últimas Novedades', description: 'Las películas más recientes de la gran pantalla con sonido Dolby 5.1 y doblaje en castellano.', popularity: 97, isFeatured: true },
      { name: 'Cinema Acción & Thriller', quality: 'FHD 60FPS', genre: 'Blockbusters de Acción', description: 'Acción sin descanso, thrillers psicológicos y superproducciones de Hollywood.', popularity: 95, isFeatured: true },
      { name: 'Cinema Comedia & Familiar', quality: 'FHD 60FPS', genre: 'Humor y Cine Familiar', description: 'Comedias desternillantes y títulos aptos para toda la familia.', popularity: 88 },
      { name: 'HBO Series Central', quality: 'FHD 60FPS', genre: 'Series Originales Premium', description: 'Temporadas completas de las series más aclamadas de la crítica mundial.', popularity: 96, isFeatured: true },
      { name: 'Netflix Hub Series', quality: 'FHD 60FPS', genre: 'Éxitos de Streaming', description: 'Maratones continuos de los fenómenos virales y series más vistas.', popularity: 94, isFeatured: true },
      { name: 'Disney & Marvel Vault', quality: 'FHD 60FPS', genre: 'Universo Cinematográfico', description: 'Todas las películas del universo Marvel, Star Wars y clásicos de animación.', popularity: 93, isFeatured: true },
      { name: 'Paramount Showcase', quality: 'FHD 60FPS', genre: 'Drama & Western', description: 'Grandes producciones cinematográficas y colecciones de cine clásico.', popularity: 82 },
      { name: 'Documentary World', quality: 'FHD 60FPS', genre: 'Documentales de Calidad', description: 'Investigaciones, naturaleza extrema e historia contada en alta resolución.', popularity: 85 },
      { name: 'Cinema Terror', quality: 'FHD 60FPS', genre: 'Horror', description: 'Las mejores películas de terror y suspense de todos los tiempos.', popularity: 84 },
      { name: 'Cinema Romántico', quality: 'FHD 60FPS', genre: 'Romance', description: 'Historias de amor, comedias románticas y cine de sentimientos.', popularity: 80 },
      { name: 'Cinema Ciencia Ficción', quality: 'FHD 60FPS', genre: 'Sci-Fi', description: 'Viajes espaciales, futuros distópicos y mundos imaginarios.', popularity: 86 },
      { name: 'Cinema Aventuras', quality: 'FHD 60FPS', genre: 'Aventura', description: 'Expediciones épicas y aventuras inolvidables en la gran pantalla.', popularity: 81 }
    ],
    faqs: [
      { question: '¿Con qué frecuencia se actualiza la videoteca VOD?', answer: 'El catálogo de películas y series se actualiza de manera automatizada todos los días con los últimos estrenos de cine y plataformas.' },
      { question: '¿Las películas vienen dobladas en español o subtituladas?', answer: 'Prácticamente la totalidad de los contenidos disponen de doblaje en español de España o Latino, además de subtítulos opcionales.' }
    ]
  },
  {
    slug: 'kids',
    name: 'Infantil & Familia',
    totalChannels: 85,
    pageTitle: 'Canales Infantiles en IPTV | Dibujos y Series para Niños en Español',
    metaDescription: 'Canales infantiles seguros y educativos para niños. Disney Channel, Nickelodeon, Cartoon Network y más en calidad Full HD y audio en español.',
    description: 'Canales infantiles seguros y entretenidos para todas las edades. Dibujos animados, series juveniles y programas educativos doblados al español.',
    longDescription: 'La mejor selección de canales infantiles para toda la familia. Disfruta de Disney Channel, Nickelodeon, Cartoon Network, Clan TVE y muchos más. Contenido 100% seguro y sin anuncios para niños de todas las edades, con programación educativa y de entretenimiento de calidad. Todos los canales emiten con audio en español y están disponibles en Full HD.',
    keywords: [
      'Canales Infantiles IPTV',
      'Disney Channel Español IPTV',
      'Nickelodeon En Vivo IPTV',
      'Cartoon Network Español',
      'BabyTV IPTV Streaming'
    ],
    channels: [
      { name: 'Clan TVE HD', quality: 'FHD 60FPS', genre: 'Televisión Infantil Pública', description: 'Las series preferidas por los más pequeños de la mano de Televisión Española.', popularity: 94, isFeatured: true },
      { name: 'Disney Channel España HD', quality: 'FHD 60FPS', genre: 'Animación & Series', description: 'Películas originales de Disney, series de éxito y contenido familiar.', popularity: 98, isFeatured: true },
      { name: 'Nickelodeon España HD', quality: 'FHD 60FPS', genre: 'Animación Moderna', description: 'Bob Esponja, La Patrulla Canina y las mejores series juveniles.', popularity: 96, isFeatured: true },
      { name: 'Nick Jr. España', quality: 'FHD 60FPS', genre: 'Preescolar', description: 'Contenido didáctico y seguro diseñado específicamente para niños en edad preescolar.', popularity: 89 },
      { name: 'Cartoon Network Latam/ES', quality: 'FHD 60FPS', genre: 'Clásicos y Nuevos Dibujos', description: 'Las mejores aventuras animadas para divertir a los jóvenes espectadores.', popularity: 95, isFeatured: true },
      { name: 'BabyTV Español', quality: 'FHD 60FPS', genre: 'Bebés & Primeros Pasos', description: 'Estimulación visual y musical sin anuncios diseñada para bebés.', popularity: 85 },
      { name: 'Disney Junior España', quality: 'FHD 60FPS', genre: 'Magia Infantil', description: 'Mickey Mouse, princesas y personajes entrañables para los primeros años.', popularity: 92, isFeatured: true },
      { name: 'Boomerang España', quality: 'HD', genre: 'Clásicos Animados', description: 'Los dibujos animados clásicos de Hanna-Barbera y Looney Tunes.', popularity: 83 },
      { name: 'Panda Channel', quality: 'HD', genre: 'Educativo', description: 'Programas educativos para niños en edad escolar.', popularity: 78 },
      { name: 'Kids Channel', quality: 'FHD 60FPS', genre: 'Entretenimiento', description: 'Series y películas infantiles 24/7.', popularity: 76 }
    ],
    faqs: [
      { question: '¿Los canales infantiles emiten completamente en español?', answer: 'Sí, todos los canales de esta categoría disponen de su respectivo doblaje al español.' },
      { question: '¿Se puede configurar un control parental en las aplicaciones IPTV?', answer: 'Sí, la gran mayoría de apps de reproducción permiten establecer un PIN de bloqueo para restringir contenidos.' }
    ]
  },
  {
    slug: 'internacional',
    name: 'Canales Internacionales',
    totalChannels: 19500,
    pageTitle: 'Canales Internacionales en IPTV | UK, USA, Francia, Alemania y más',
    metaDescription: 'Miles de canales internacionales de todo el mundo: Reino Unido, Estados Unidos, Francia, Alemania, Italia, Portugal y Asia en Full HD.',
    description: 'Acceso a canales de televisión en vivo de todo el mundo (Reino Unido, Alemania, Francia, Italia, Estados Unidos, Portugal y Asia).',
    longDescription: 'Descubre nuestra selección de canales internacionales con más de 19,500 canales de todos los países del mundo. Encuentra las mejores cadenas del Reino Unido (BBC, ITV, Sky), Estados Unidos (CNN, HBO, ESPN), Francia (TF1, France 2), Alemania (ARD, ZDF), Italia (Rai, Canale 5), Portugal (RTP, SIC) y muchos más. Organizado por países con sus respectivas banderas para una navegación intuitiva.',
    keywords: [
      'Canales Internacionales IPTV',
      'UK USA TV Channels IPTV',
      'Canales Franceses Alemanes IPTV',
      'IPTV Global Subscription'
    ],
    channels: [
      // UK Channels
      { name: 'BBC One HD', quality: 'FHD 60FPS', genre: 'Reino Unido', description: 'Emisión principal de la cadena británica con informativos y grandes dramas.', country: 'UK', popularity: 98, isFeatured: true },
      { name: 'BBC Two HD', quality: 'FHD 60FPS', genre: 'Reino Unido', description: 'Documentales, cultura y programas de entretenimiento de la BBC.', country: 'UK', popularity: 92 },
      { name: 'ITV HD', quality: 'FHD 60FPS', genre: 'Reino Unido', description: 'El canal comercial líder en el Reino Unido con dramas y realities.', country: 'UK', popularity: 90 },
      { name: 'Channel 4 HD', quality: 'FHD 60FPS', genre: 'Reino Unido', description: 'Programas alternativos, comedias y documentales británicos.', country: 'UK', popularity: 87 },
      { name: 'Sky News HD', quality: 'FHD 60FPS', genre: 'Reino Unido', description: 'Información en directo 24/7 desde Londres.', country: 'UK', popularity: 85 },
      { name: 'BT Sport 1 HD', quality: 'FHD 60FPS', genre: 'Reino Unido', description: 'Fútbol de la Premier League y deportes británicos.', country: 'UK', popularity: 93, isFeatured: true },
      { name: 'Sky Sports Premier League HD', quality: 'FHD 60FPS', genre: 'Reino Unido', description: 'Todos los partidos de la Premier League en exclusiva.', country: 'UK', popularity: 96, isFeatured: true },
      
      // USA Channels
      { name: 'CNN USA HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Noticias en directo desde Atlanta y cobertura continua de la actualidad norteamericana.', country: 'USA', popularity: 97, isFeatured: true },
      { name: 'Fox News HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Noticias políticas y actualidad desde Estados Unidos.', country: 'USA', popularity: 88 },
      { name: 'MSNBC HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Análisis político y noticias en profundidad.', country: 'USA', popularity: 82 },
      { name: 'HBO HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Series originales de calidad y grandes producciones.', country: 'USA', popularity: 99, isFeatured: true },
      { name: 'Showtime HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Series exclusivas y cine de estreno.', country: 'USA', popularity: 86 },
      { name: 'Starz HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Producciones originales y películas de éxito.', country: 'USA', popularity: 80 },
      { name: 'ESPN USA HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Deportes americanos, NCAA y eventos internacionales.', country: 'USA', popularity: 94, isFeatured: true },
      { name: 'ABC HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Series de éxito, realities y noticias americanas.', country: 'USA', popularity: 89 },
      { name: 'NBC HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Entretenimiento y programas de éxito en USA.', country: 'USA', popularity: 87 },
      { name: 'CBS HD', quality: 'FHD 60FPS', genre: 'Estados Unidos', description: 'Series procedimentales y comedias americanas.', country: 'USA', popularity: 85 },
      
      // France Channels
      { name: 'TF1 HD', quality: 'FHD 60FPS', genre: 'Francia', description: 'El canal comercial de referencia en Francia con entretenimiento y cine.', country: 'Francia', popularity: 95, isFeatured: true },
      { name: 'France 2 HD', quality: 'FHD 60FPS', genre: 'Francia', description: 'Televisión pública francesa con informativos y grandes eventos.', country: 'Francia', popularity: 88 },
      { name: 'M6 HD', quality: 'FHD 60FPS', genre: 'Francia', description: 'Entretenimiento, realities y series francesas.', country: 'Francia', popularity: 85 },
      
      // Germany Channels
      { name: 'ARD Das Erste', quality: 'FHD 60FPS', genre: 'Alemania', description: 'Televisión pública alemana con noticias nacionales y retransmisiones.', country: 'Alemania', popularity: 94, isFeatured: true },
      { name: 'ZDF HD', quality: 'FHD 60FPS', genre: 'Alemania', description: 'Canal público alemán con programas de calidad.', country: 'Alemania', popularity: 89 },
      { name: 'ProSieben HD', quality: 'FHD 60FPS', genre: 'Alemania', description: 'Entretenimiento y series alemanas para todos los públicos.', country: 'Alemania', popularity: 83 },
      
      // Italy Channels
      { name: 'Rai 1 HD', quality: 'FHD 60FPS', genre: 'Italia', description: 'Televisión pública de Italia con eventos de gran formato y magacines.', country: 'Italia', popularity: 96, isFeatured: true },
      { name: 'Rai 2 HD', quality: 'FHD 60FPS', genre: 'Italia', description: 'Entretenimiento italiano y grandes eventos deportivos.', country: 'Italia', popularity: 87 },
      { name: 'Canale 5 HD', quality: 'FHD 60FPS', genre: 'Italia', description: 'El canal comercial más visto de Italia.', country: 'Italia', popularity: 92, isFeatured: true },
      
      // Portugal Channels
      { name: 'RTP 1 HD', quality: 'FHD 60FPS', genre: 'Portugal', description: 'Canal público principal de Portugal con actualidad y cultura lusa.', country: 'Portugal', popularity: 93, isFeatured: true },
      { name: 'SIC HD', quality: 'FHD 60FPS', genre: 'Portugal', description: 'Canal comercial portugués con series y entretenimiento.', country: 'Portugal', popularity: 86 },
      { name: 'TVI HD', quality: 'FHD 60FPS', genre: 'Portugal', description: 'Informativos y programas de éxito en Portugal.', country: 'Portugal', popularity: 82 }
    ],
    faqs: [
      { question: '¿Están los canales agrupados por países de forma ordenada?', answer: 'Sí, las listas están organizadas alfabéticamente por países con sus respectivas banderas para una navegación intuitiva.' },
      { question: '¿Puedo ocultar los países que no suelo sintonizar?', answer: 'Sí, mediante los ajustes de tu aplicación o contactando con nuestro soporte técnico puedes simplificar tus listas.' }
    ]
  }
];

// Helper functions
export function getChannelCategoryBySlug(slug: string): ChannelCategory | undefined {
  return channelsData.find((category) => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return channelsData.map((category) => category.slug);
}

export function getPaginatedChannels(
  category: ChannelCategory,
  page: number = 1,
  pageSize: number = 30
): { channels: Channel[]; totalPages: number; hasMore: boolean; totalChannels: number } {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = category.channels.slice(start, end);
  
  return {
    channels: paginated,
    totalPages: Math.ceil(category.channels.length / pageSize),
    hasMore: end < category.channels.length,
    totalChannels: category.channels.length
  };
}

export function getFeaturedChannels(category: ChannelCategory, limit: number = 10): Channel[] {
  return category.channels
    .filter(ch => ch.isFeatured)
    .slice(0, limit);
}