export const categories = [
	{
		name: 'Чокеры',
	},
	{
		name: 'Колье',
	},
	{
		name: 'Цепи',
	},
	{
		name: 'Браслеты',
	},
	{
		name: 'Кольца',
	},
	{
		name: 'Каффы',
	},
]

export const materials = [
	{
		name: 'Родий',
	},
	{
		name: 'Позолота',
	},
	{
		name: 'Жемчуг Майорка',
	},
	{
		name: 'Гематит',
	},
	{
		name: 'Перламутр',
	},
	{
		name: 'Магнезит',
	},
	{
		name: 'Хрусталь',
	},
	{
		name: 'Циркон',
	},
	{
		name: 'Керамика',
	},
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
	{
		name: 'Чокер гематит с перламутром',
		imagesUrl: [
			'https://sun9-78.userapi.com/s/v1/ig2/wrOT5dHWrw4aP0_GFeX4hoxqlf1OsoxlozH6QXGve8vv0nb9pzwWmnbvWkmWS7R9IQZt2LBVvwTsyZiTm7z9yOkn.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=q8rP_BH7a3cx1oVpeztYLD0uCRl8xvmS2gp8f1z_i2g&cs=540x0',
			'https://sun9-53.userapi.com/s/v1/ig2/3xV5pz-0AJNpFD0ATjAyPxW4u_XSXfOA8G7iYw5VoQ6-oYZ3iQEfo5Ywo2VnMq_JrdUxfwRUwrwj3lCeY1hQkcDC.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&cs=1290x0',
			'https://sun9-51.userapi.com/s/v1/ig2/AjAh1S5KfKyYgwwXmu9yVd9DPtMrIXsCSqupl3fICBH4JI2bYSqxwOCYlsHTFJHxQj6peFRhFXg-LfF2IhZYExVu.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=Y3Pus8Kvfg8KNiQfFpF9MXwlx_uusUD_aF7wqsIji6U&cs=540x0',
			'https://sun9-67.userapi.com/s/v1/ig2/9StgBsjxWNjd9t060T6WQqSvB_F7uZwQWYbO0HEcuG3cAtXvF1iv9DcAZagAX28GERTurUcpebUeSxqbpDjsMAlM.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=3-33zPQnPxFniiGIOTLwdK5YC99t9I_Gi8A21aTJO9Q&cs=540x0',
			'https://sun9-60.userapi.com/s/v1/ig2/p4Qr0NevRqhhztjg-AjtSBiWDwZJqYN1xgWTTxdhk199cLe2JWGUmIPTtWFfSlmCu1IM7pNbJaS2stpKlUd_Aqot.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=NvRP2a__iMQ_DFLHO_e8ujn6A9ttzHLMhf8k7qzXGfE&cs=540x0',
		],
		price: 2200,
		description:
			'Элегантный чокер, сочетающий в себе загадочный блеск гематита и нежное сияние перламутра. Идеально подойдет для создания утонченного образа и подчеркнет индивидуальность своей обладательницы.',
		categoryId: 1,
		materials: {
			connect: [{ id: 4 }, { id: 5 }],
		},
	},
	{
		name: 'Чокер из жемчуга майорка',
		imagesUrl: [
			'https://sun9-21.userapi.com/s/v1/ig2/ULUbvVSvq0BNml4WjyXN3SvG7xRFv5TcmmiVFFLwX_Jee-gUSGW7f90k6ZrfNBlZwoWG7tp0LPhm72_y2OjLQ42D.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=ftHD-k3vJaiQkaNN2KNjPpaNCy2AWaUHvTXxmtoW5rc&cs=540x0',
			'https://sun9-79.userapi.com/s/v1/ig2/FeYvuyPNPPPbq6GPN4SEWl3Znpjyt1TYiPyR0S7eqqs2IDs_hZsvUdvYGzzNjoxfre9neuDLlXRM5Z2JL0HerZGr.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=JezcJ83L2capIiPR5ZDf-4ag-wmMb5qSYPP4aX3b2TU&cs=540x0',
			'https://sun9-27.userapi.com/s/v1/ig2/a5czgW5X0lJ6rocICrh_bgvtVK0EMehIlHX1yFT3d8qx1AOYDZJl9E6GbiBlBGGyZ4gK8kNWmfNEm4zvNjcZA2jo.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=FY9-aodANwY8Z7PGEP8dNyPvTs1vFeM24uQC93ylfsQ&cs=540x0',
		],
		price: 1800,
		description:
			'Классический чокер из жемчуга Майорка — символ женственности и изысканности. Универсальный аксессуар, который гармонично дополнит как повседневный, так и вечерний наряд.',
		categoryId: 1,
		materials: {
			connect: [{ id: 3 }],
		},
	},
	{
		name: 'Чокер черный из хрусталя и гематита',
		imagesUrl: [
			'https://sun9-24.userapi.com/s/v1/ig2/R6_BsECskBJ_ORkPTvB4xhKujdR-kgvp3GfcJZE2x5luaRUd83Jgr3c2sRuiALNR8fcA72Zx5LAqFmFlMx9z2aEm.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2276,1440x2560&from=bu&u=WDwu4qJ2H6Ol0bZgEPLsSEubRQyNd1JEYI_CXUHoqNQ&cs=540x0',
			'https://sun9-30.userapi.com/s/v1/ig2/DjTH5eNCvVE5Gu6k2yDDYW3_k-Zsho6EBwARuhfs2JRCcPYz4TawxD7dNLbIsU5gGr-AULl1qyszuuy46QNDBG4E.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2276,1440x2560&from=bu&u=1sUjlxS8d7KDMU1EFGvKG9vdYOeYQBFyHRCzMG5CG5M&cs=540x0',
		],
		price: 1700,
		description:
			'Современный чокер с черным хрусталем и гематитом — выбор для смелых и стильных. Глубокий цвет и блеск материалов придают украшению загадочность и выразительность.',
		categoryId: 1,
		materials: {
			connect: [{ id: 7 }, { id: 4 }],
		},
	},
	{
		name: 'Цепь-галстук - родий',
		imagesUrl: [
			'https://sun9-75.userapi.com/s/v1/ig2/-a9z1Uoz493HF7dQ2qAk9hlptpK-iwRoNZaKOyrbH3CXuG4054yqtedycZRP8wCGQ53MvgkboQrVGJ5jnU8P4oSD.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=soh4tqGgtFnAbQHl_Qjd7K7WizrE1qZw7jeZfcnmNrE&cs=540x0',
			'https://sun9-31.userapi.com/s/v1/ig2/h8rNbEirH9asmNM7avs5W5JvAqyhe5CZG5srCsfpA7YWhVTNLZIvk0PYrTI6DvQ0n0jO4sEaWBGaA6HRHoQ_1HXO.jpg?quality=95&as=32x43,48x65,72x98,108x146,160x217,240x325,360x488,480x650,540x732,640x867,720x976,1080x1464,1280x1735,1440x1951,1889x2560&from=bu&u=LsOc4I7z3G5YXlTUdPH9s_oezfHIDVLqr1B5iDkFpKk&cs=540x0',
		],
		price: 1300,
		description:
			'Минималистичная цепь-галстук с покрытием из родия. Универсальный аксессуар, который подчеркнет элегантность и современный стиль, идеально сочетается с любым образом.',
		categoryId: 3,
		materials: {
			connect: [{ id: 1 }],
		},
	},
	{
		name: 'Цепь-галстук - позолота',
		imagesUrl: [
			'https://sun9-29.userapi.com/s/v1/ig2/HydQtdTTRD-y7ngYo_8CSZlyHMzLtkM6pksRGU9AcuVI_kTKnquhdRhwydIXVHJelZu9RvW9hbfZvjMlFC3SmChB.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=Myq0P9u9XkysLAT3HNWay27x9uCutus9HNqG_fENHvo&cs=540x0',
			'https://sun9-59.userapi.com/s/v1/ig2/_WHNisROfnXwqCIs87sqS-23B0j4jbdus3hZRbygkBgJPu4bcJzVlqVaP-wQsWW6Z5Pvc8bb1Sb7xq5mwpBJCklc.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=1mW_WLF4KLoyCnqrI0n46uO0mag31W2NFD-vOQm6snk&cs=540x0',
		],
		price: 1300,
		description:
			'Изящная цепь-галстук с позолотой — акцентный элемент для вашего гардероба. Добавит роскоши и утонченности как деловому, так и вечернему образу.',
		categoryId: 3,
		materials: {
			connect: [{ id: 2 }],
		},
	},
	{
		name: 'Цепь с подвесками',
		imagesUrl: [
			'https://sun9-17.userapi.com/s/v1/ig2/BtWv7A8nBhb5S--NnjHyKF2cJjv9MA7ry_LS7YRih1cz6CV9PAHsyX8wL7kJsG1_iFJjY6e0r4qiJaI5e-hl2Vir.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=pVgLrlPvgDnjEw-HEe99tsYjCme2sGMI658qnNhV9PA&cs=540x0',
			'https://sun9-31.userapi.com/s/v1/ig2/_NSv-Y_jFjk5cBuKtSlPpeViQ-LuSABa4UfJUsOWW6OHXRcSZC5iLn-RgW9_oZpnUbif6Otfkiuku3A1SF1-jY9Q.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=gIjYyGdam62aHnABer3mqJvwdrl__wI3Z0NhM8h1h3E&cs=540x0',
		],
		price: 1700,
		description:
			'Стильная цепь с подвесками — трендовый аксессуар, который добавит динамики и индивидуальности вашему образу. Легко комбинируется с другими украшениями.',
		categoryId: 3,
		materials: {
			connect: [{ id: 1 }],
		},
	},
	{
		name: 'Колье со съемными отрезками 10в1',
		imagesUrl: [
			'https://sun9-60.userapi.com/s/v1/ig2/2isGdqAHFlKxtZM3XgSEAzarV_eR-3tH6A-KzOPMGpVi8nU8m9rIz1d6bTpdjawqZh0JA1vlS0DpVl07IjHqJJ90.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=gQgeSyNhuwvcWwbQ_BwHk3poiNF3yAK5Q3RYI2hWy8E&cs=540x0',
			'https://sun9-15.userapi.com/s/v1/ig2/EVqi7zqkWqyslU_kz2Rq9Eq5f3kXAsOY1xVY_iPxwoPJnrLueTfYW-ag8UwgV_unK2ZEsyWlp8eKQosnN9LTyQzP.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=P6qTvH8nLfmLkKhFeHH-QEIRgEoKPUWbxaOgPDoiTro&cs=540x0',
			'https://sun9-8.userapi.com/s/v1/ig2/v9oOp6OfnVSGT3XIuG93ADe9HsHWYSJ1XzV7am10MVHcXyLtn8JuBAPNo5ERAnyMd8boVawJBTwFA8Zpftttetsi.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=jArkBHQIkgQLyERiz5nVO5CRYqTggDdixz4kKcxO7OM&cs=540x0',
			'https://sun9-34.userapi.com/s/v1/ig2/VsgSbWfKWRjkp-Rj0-ribOzVg-bu6wJOLtDgeJOLiSnKy6GdZmHzQU2C0rBSVi-71kAOiB9S_zAOEdjscN2Tix4N.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=0ZOOvcFTSySt-vNVrBhgfer_y7NhPVFhs-VVdIn9uaE&cs=540x0',
			'https://sun9-39.userapi.com/s/v1/ig2/Q-Ur6hWD4orOha4ceZIVbW2vOeZgA6Czt52YPk-lfcdFLonmKXDlkWJUz0bspD-QNODf3EOBLESbfE0og64AzPKN.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=ObB1kticEt-9mBVniV8-ZcbL6bc7KTV1sxSpyZK831M&cs=540x0',
		],
		price: 3900,
		description:
			'Уникальное колье-трансформер с десятью съемными отрезками. Позволяет создавать множество вариантов ношения, подчеркивая вашу креативность и индивидуальность.',
		categoryId: 2,
		materials: {
			connect: [{ id: 4 }, { id: 6 }],
		},
	},
	{
		name: 'Колье из гематита, горного хрусталя и цепей',
		imagesUrl: [
			'https://sun9-63.userapi.com/s/v1/ig2/s2mzXGDLr1ZsiGqwm3Hnidpkawf5ULCUiax5JR8bILenluHjP_lxdpfjuXGvU9xJJWF2F2db6VkdlfFtW2ICGMjr.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=uv5bN9Q0Zch9q2llav3pB4MQUgoILPFTGx-LEnC713Y&cs=540x0',
			'https://sun9-47.userapi.com/s/v1/ig2/dPsp2lssGZX0BxKerpw95buLbUl3pfKM4_Up-sGusl5tUE01HpJCySWObrqOKEdVkRLpH_rmc-B73-AHuwuH6wW5.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=sZoHtjBrqlO_YRA149oRwoI7HlQVwwEbTOQwgO8wtYM&cs=540x0',
		],
		price: 3200,
		description:
			'Эксклюзивное колье, сочетающее гематит, горный хрусталь и металлические цепи. Идеальный выбор для тех, кто ценит оригинальность и выразительные детали.',
		categoryId: 2,
		materials: {
			connect: [{ id: 4 }, { id: 7 }],
		},
	},
	{
		name: 'Колье из жемчуга Майорка с цепями',
		imagesUrl: [
			'https://sun9-37.userapi.com/s/v1/ig2/kon9a_ByO9nsTu6TggJBo9MOgKN8g6kIqNZ1342z_1oQxKwGf_acmU8OPyWySl0yW_CRhBrufgjYPH0bgg0xr0j7.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=8pA2gdgVkvFHBK1unqMkmcfVpGevzY723tx4G6FsoWU&cs=540x0',
			'https://sun9-19.userapi.com/s/v1/ig2/5Nwm4-_voRXKK_JTvH7QNnjyP6MI_lgJLeJv4kKYjMWjKggqr85_-p4JxBksT14mCuUxUYSW_N3ov5V1IcvWeja4.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2275,1290x2293&from=bu&u=JcBk21Mqcge0f5FsWICibumY5kb8Lr0Fc8awzcgu8ns&cs=540x0',
		],
		price: 2200,
		description:
			'Колье из жемчуга Майорка, дополненное стильными цепями. Эффектное сочетание классики и современности для создания запоминающегося образа.',
		categoryId: 2,
		materials: {
			connect: [{ id: 3 }],
		},
	},
]
