/// <reference types="@sveltejs/kit" />

export interface Menu {
	coffees: [
		{
			_createdAt: '2021-05-21T14:00:07Z';
			_id: 'c69835c7-4ac8-4506-98d6-e365346e484e';
			_rev: 'xngI5P3maVkXbNZYYW3OLC';
			_type: 'coffee';
			_updatedAt: '2021-05-21T14:00:07Z';
			name: 'Drip Coffee';
			price: {
				large: '2.50';
				medium: '2.25';
				small: '2.00';
			};
		},
		{
			_createdAt: '2021-05-21T14:00:26Z';
			_id: '1ef8a367-074a-4f5c-a90c-74c0d0c4e446';
			_rev: 'xngI5P3maVkXbNZYYW3Tu6';
			_type: 'coffee';
			_updatedAt: '2021-05-21T14:00:26Z';
			name: 'Americano';
			price: {
				large: '4.25';
				medium: '3.75';
				small: '3.25';
			};
		},
		{
			_createdAt: '2021-05-21T13:16:43Z';
			_id: '534ef6b8-8b7b-4c46-b90a-c0e893b3585d';
			_rev: 'FzDSKLL6XBCyQU7PEgh8dQ';
			_type: 'coffee';
			_updatedAt: '2021-07-22T15:35:13Z';
			image: {
				_type: 'mainImage';
				alt: 'A latte';
				caption: 'A latte';
			};
			name: 'Latte';
			price: {
				large: '5.00';
				medium: '4.50';
				small: '4.00';
			};
		},
		{
			_createdAt: '2021-05-21T13:53:19Z';
			_id: 'f0a5dc5a-be43-421a-ad40-98c683880407';
			_rev: 'D5jwD4g6kogHyj4fP4msqW';
			_type: 'coffee';
			_updatedAt: '2021-07-22T15:35:07Z';
			image: {
				_type: 'mainImage';
				alt: 'A mocha';
				caption: 'A mocha';
			};
			name: 'Mocha';
			price: {
				large: '5.50';
				medium: '5.00';
				small: '4.50';
			};
		},
		{
			_createdAt: '2021-05-21T14:00:48Z';
			_id: '290c8ab0-f2d0-41ab-be00-5f79e9dbf913';
			_rev: 'x0nPTEdY91ctbgkWo6WV5N';
			_type: 'coffee';
			_updatedAt: '2021-05-21T14:00:48Z';
			name: 'Chai Tea Latte';
			price: {
				large: '5.50';
				medium: '5.00';
				small: '4.50';
			};
		},
		{
			_createdAt: '2021-05-21T14:01:10Z';
			_id: 'db1fcaed-62a4-47f3-a9d6-59fb4b860f90';
			_rev: 'xngI5P3maVkXbNZYYW3iBs';
			_type: 'coffee';
			_updatedAt: '2021-05-21T14:01:10Z';
			name: 'Hot Chocolate';
			price: {
				large: '4.25';
				medium: '3.75';
				small: '3.25';
			};
		},
		{
			_createdAt: '2021-05-21T14:01:34Z';
			_id: '0bdc990b-a19e-4a41-97bf-2db655142bda';
			_rev: 'x0nPTEdY91ctbgkWo6WjCb';
			_type: 'coffee';
			_updatedAt: '2021-05-21T14:01:34Z';
			name: 'Blended Drink';
			price: {
				large: '5.50';
				medium: '5.00';
				small: '4.50';
			};
		}
	];
	drinks: [
		{
			_createdAt: '2021-05-21T13:57:07Z';
			_id: '874102b8-d2b0-4de7-8219-31d0a4207ca2';
			_rev: 'xngI5P3maVkXbNZYYW1jdY';
			_type: 'drink';
			_updatedAt: '2021-05-21T13:57:07Z';
			name: 'Bottled Soda';
			price: 2;
		},
		{
			_createdAt: '2021-05-21T13:57:21Z';
			_id: 'f59dce32-48c9-4468-8716-c3c34a1e6353';
			_rev: 'x0nPTEdY91ctbgkWo6U5oF';
			_type: 'drink';
			_updatedAt: '2021-05-21T13:57:21Z';
			name: 'Mineral Water';
			price: 2;
		},
		{
			_createdAt: '2021-05-21T13:17:29Z';
			_id: 'a2ee5d0c-9ef2-4315-ba3b-b7d7c7303d3b';
			_rev: 'xngI5P3maVkXbNZYYVpzrK';
			_type: 'drink';
			_updatedAt: '2021-05-21T13:20:53Z';
			name: 'Redbull';
			price: 2;
		},
		{
			_createdAt: '2021-05-21T13:53:47Z';
			_id: '66acbdf8-42db-45cb-ac65-b28e56b6640c';
			_rev: 'x0nPTEdY91ctbgkWo6SgdL';
			_type: 'drink';
			_updatedAt: '2021-05-21T13:53:47Z';
			name: 'Italian Soda 12oz';
			price: 5;
		}
	];
	location: {
		_createdAt: '2021-05-14T13:16:43Z';
		_id: '0b34709e-252f-47d9-a5e1-b80024c6a811';
		_rev: 'ksXSFaxpH8HlfSyx40O8Gg';
		_type: 'location';
		_updatedAt: '2021-10-07T19:31:15Z';
		address: {
			line1: '270 Williams Blvd';
			line2: 'Richland, WA 99354';
		};
		hours: ['Monday-Saturday: 7am-2pm', 'Sunday : Closed'];
		image: {
			_type: 'mainImage';
			alt: 'Kagen Coffee and Crepes Uptown location';
			asset: {
				_ref: 'image-b9bf589fd0765ca71f098263ba8962ee07fc3d3c-968x995-png';
				_type: 'reference';
			};
		};
		locationUrl: 'https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/';
		name: 'Tri-Cities';
		orderUrl: 'https://www.toasttab.com/kagen-coffee-crepes-270-williams-blvd/v3/?mode=fulfillment';
		phone: '509-851-7186';
		slug: {
			_type: 'slug';
			current: 'tri-cities';
		};
	};
	savorys: [
		{
			_createdAt: '2021-07-22T15:19:03Z';
			_id: '5387724b-0c3c-49ce-aa8e-5b988191f353';
			_rev: 'bmR4rlW25fZQEu5c5k2FoA';
			_type: 'crepe';
			_updatedAt: '2021-09-29T18:55:18Z';
			image: {
				_type: 'mainImage';
				alt: 'The egg crepe';
				asset: {
					_createdAt: '2021-07-22T15:19:37Z';
					_id: 'image-7329ce68279e09aa3c0b5e75cff64f7e9163b3ee-600x600-jpg';
					_rev: 'D5jwD4g6kogHyj4fP4iY9c';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-22T15:19:37Z';
					assetId: '7329ce68279e09aa3c0b5e75cff64f7e9163b3ee';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAUGBwP/xAAiEAABBAIDAAIDAAAAAAAAAAABAAIDBAURBhIhImETQXL/xAAXAQADAQAAAAAAAAAAAAAAAAACBAUD/8QAHxEAAgEEAgMAAAAAAAAAAAAAAAECAxITIQQRFFFh/9oADAMBAAIRAxEAPwDG+O8LzEt2KzBWcQw7+Q8W74kXauKp/mq7MJ+fQb93tVqtym5PFE/C2assYHkDyGuH04FT1HkuUbaiZZNapVkHeQukaQHKV5HIUklHRRx0Xpsuz+X05tOEj2+a05uiEURYzOBsPDxALB0AZGDQJ+kTWep8McVP0zEbmOqiUdYg3Z9I8XWLG1WP8j3/AEdoiUg3aPTSuJmLtCwMjke1o/QKIiNA9H//2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#604531';
								foreground: '#fff';
								population: 2.98;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#7b430b';
								foreground: '#fff';
								population: 2.11;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d29852';
								foreground: '#000';
								population: 6.85;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d7cdb0';
								foreground: '#000';
								population: 1.58;
								title: '#000';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#dfcb9c';
								foreground: '#000';
								population: 2.47;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#836c5c';
								foreground: '#fff';
								population: 4.7;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d29852';
								foreground: '#000';
								population: 6.85;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theEgg.jpg';
					path: 'images/codowsse/production/7329ce68279e09aa3c0b5e75cff64f7e9163b3ee-600x600.jpg';
					sha1hash: '7329ce68279e09aa3c0b5e75cff64f7e9163b3ee';
					size: 68464;
					uploadId: 'UY0rZjDLx0kzLeEpUfibqP9Uuz7mFwcF';
					url: 'https://cdn.sanity.io/images/codowsse/production/7329ce68279e09aa3c0b5e75cff64f7e9163b3ee-600x600.jpg';
				};
			};
			ingredients: ['provolone', 'ham', 'spinach', 'eggs', 'dairy', 'flour'];
			name: 'The Egg';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		},
		{
			_createdAt: '2021-07-21T02:36:49Z';
			_id: 'a87ed3f7-0780-4081-8d5d-1bca5fa2da6a';
			_rev: 'FzDSKLL6XBCyQU7PEggN4B';
			_type: 'crepe';
			_updatedAt: '2021-07-22T15:28:19Z';
			image: {
				_type: 'mainImage';
				alt: 'The breakfast in bed crepe';
				asset: {
					_createdAt: '2021-07-21T02:38:08Z';
					_id: 'image-5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0-600x600-jpg';
					_rev: 'Ie6fVHtvyZrIK4CVBrQaEd';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-21T02:38:08Z';
					assetId: '5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcGAwj/xAAoEAABBAECBAYDAAAAAAAAAAABAAIDBAUGEQcSIXETFSIjQXJRYYH/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQF/8QAHREAAgIBBQAAAAAAAAAAAAAAAAECERQDEyEyQf/aAAwDAQACEQMRAD8A876csT17wlNY2G9RylpIBPyrdofPcQMpNFTpW4oa8TQPEsx8rWt7/KzOO1XimV2Qxtjpgn3GSQ9ewctPh9eYutFJDYsiWLcFjI4yf4oJas76mhtRqnIlvFDE5GLWl/zCZlqy8hzpYh6Xb/hFYZ8rgMi8WIqYAcNvc6EnsiPJa4oXjp+ktkiYZBzNDvsF1DhC1xjYwbfpEUaZfJIOyM7TsC0D6oiJgs//2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#4f4032';
								foreground: '#fff';
								population: 1.39;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#67300a';
								foreground: '#fff';
								population: 0.94;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#93633f';
								foreground: '#fff';
								population: 7.79;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c7b9a8';
								foreground: '#000';
								population: 7.29;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#f0ccaf';
								foreground: '#000';
								population: 0.49;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#93633f';
								foreground: '#fff';
								population: 7.79;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ca8129';
								foreground: '#fff';
								population: 1.99;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theAllAmerican.jpg';
					path: 'images/codowsse/production/5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0-600x600.jpg';
					sha1hash: '5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0';
					size: 56580;
					uploadId: 'o1v6JCutSkQiDR5J3wawUkCXu6nSzAn8';
					url: 'https://cdn.sanity.io/images/codowsse/production/5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0-600x600.jpg';
				};
			};
			ingredients: ['bacon', 'cheddar', 'maple sausage', 'maple syrup', 'eggs', 'dairy', 'flour'];
			name: 'The Breakfast in Bed';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		},
		{
			_createdAt: '2021-07-22T15:25:54Z';
			_id: 'c9d5a630-7f71-43de-8974-ccda1cf7e923';
			_rev: 'mRsNjqBh7j0H88tnJzQ6nH';
			_type: 'crepe';
			_updatedAt: '2021-07-22T15:26:32Z';
			image: {
				_type: 'mainImage';
				alt: 'The Chicken crepe';
				asset: {
					_createdAt: '2021-07-22T15:26:11Z';
					_id: 'image-19c5369a1b26ee1b9be86b50492ba7938d2bf74e-600x600-jpg';
					_rev: 'D5jwD4g6kogHyj4fP4kWXE';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-22T15:26:11Z';
					assetId: '19c5369a1b26ee1b9be86b50492ba7938d2bf74e';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUHBv/EACYQAAEEAgECBgMAAAAAAAAAAAECAwQFAAYREzEHEiEiQVEygfH/xAAXAQADAQAAAAAAAAAAAAAAAAABBAUD/8QAGhEBAAIDAQAAAAAAAAAAAAAAAQARAgMyIf/aAAwDAQACEQMRAD8AlM2OqWGxsTJEC3tSUgcKRwkH7Jy9tWwUj1o2xZVUmBD6XKEN+vK/jt2zTtqbWwtiFXU7bjToJLraQA2fjtnDbLrlw2hUgrilAHPvICv5iee55q5s4+2TIbu7lM2TrbERwtJ/DqAebjGdBI3HWojnQuozDs1v2rW0rkH9/eMWArljzsyvomTI8R9uQwllN7NCEjgDqHJNhtN5YOFc20lvKPofM4cYymBJqtyV6rJUokk9zjGMME//2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#2f572f';
								foreground: '#fff';
								population: 1.37;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#624025';
								foreground: '#fff';
								population: 10.15;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#624025';
								foreground: '#fff';
								population: 10.15;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c8b599';
								foreground: '#000';
								population: 5.57;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#e6cbb0';
								foreground: '#000';
								population: 2.06;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#b79a70';
								foreground: '#000';
								population: 6.2;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#8d6e3a';
								foreground: '#fff';
								population: 8.07;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_chicken.jpg';
					path: 'images/codowsse/production/19c5369a1b26ee1b9be86b50492ba7938d2bf74e-600x600.jpg';
					sha1hash: '19c5369a1b26ee1b9be86b50492ba7938d2bf74e';
					size: 71459;
					uploadId: 'NU2DOyTXRAohzPJ9pLuzC3wl6HDJ6qgn';
					url: 'https://cdn.sanity.io/images/codowsse/production/19c5369a1b26ee1b9be86b50492ba7938d2bf74e-600x600.jpg';
				};
			};
			ingredients: ['chicken', 'spinach', 'provolone', 'eggs', 'dairy', 'flour'];
			name: 'The Chicken';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		},
		{
			_createdAt: '2021-07-22T15:22:57Z';
			_id: '58f94e01-df55-4dd8-af9d-f03df3d5d960';
			_rev: 'FzDSKLL6XBCyQU7PEgfqEI';
			_type: 'crepe';
			_updatedAt: '2021-07-22T15:24:05Z';
			image: {
				_type: 'mainImage';
				alt: 'The Turkey Bacon crepe';
				asset: {
					_createdAt: '2021-07-22T15:23:12Z';
					_id: 'image-78f8ae1ca90ee98159a7c0f01809dce827ecf741-600x600-jpg';
					_rev: 'FzDSKLL6XBCyQU7PEgflKu';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-22T15:23:12Z';
					assetId: '78f8ae1ca90ee98159a7c0f01809dce827ecf741';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBgUH/8QAKBAAAQMEAQMCBwAAAAAAAAAAAgEDBAAFBhESBxMhFUEiMTJhcdHh/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABsRAQACAwEBAAAAAAAAAAAAAAEAAgMRIQQj/9oADAMBAAIRAxEAPwDDwpsjMZLow7M/IlqSKfbH4C/K1NfQyGwZTZJl6tBxIERwdE2PIBH32qVt8b6p4pZ4npuOxWozILpCdXSn91Wo8m6pMiveK5QH4yjoouuaLU2T1WVNcjcfnqatvs856tXNm8Zk9NtT6OxnGgXkHy353SrN0znBJUrvJj7oESIpo0XEeXvpKUkchwJX8bdWUpeGWkHVAReROKr9f8rjQcTtsgz7nf8ABa8Gn6pSjJZB0zFKimyZW6QWY9ykstckBtxRHz7UpSqKroiE6z//2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#3b5e4d';
								foreground: '#fff';
								population: 4.04;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#b24c19';
								foreground: '#fff';
								population: 0.69;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#3b5e4d';
								foreground: '#fff';
								population: 4.04;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d4c8b5';
								foreground: '#000';
								population: 0.21;
								title: '#000';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#fcd8b8';
								foreground: '#000';
								population: 0.9;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#747d8a';
								foreground: '#fff';
								population: 2.42;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ca813b';
								foreground: '#fff';
								population: 3.46;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_turkeyBacon.jpg';
					path: 'images/codowsse/production/78f8ae1ca90ee98159a7c0f01809dce827ecf741-600x600.jpg';
					sha1hash: '78f8ae1ca90ee98159a7c0f01809dce827ecf741';
					size: 65168;
					uploadId: 'L4vwBThQWyQx8US2lOMxO6jhBOjIq3we';
					url: 'https://cdn.sanity.io/images/codowsse/production/78f8ae1ca90ee98159a7c0f01809dce827ecf741-600x600.jpg';
				};
			};
			ingredients: [
				'turkey',
				'bacon',
				'provolone',
				'tomato',
				'spinach',
				'ranch',
				'eggs',
				'dairy',
				'flour'
			];
			name: 'The Turkey Bacon';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		},
		{
			_createdAt: '2021-07-22T15:26:53Z';
			_id: '0066630a-86ac-45b1-9464-2743327a8b54';
			_rev: 'D5jwD4g6kogHyj4fP4krAG';
			_type: 'crepe';
			_updatedAt: '2021-07-22T15:27:28Z';
			image: {
				_type: 'mainImage';
				alt: 'The  All American crepe';
				asset: {
					_createdAt: '2021-07-21T02:38:08Z';
					_id: 'image-5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0-600x600-jpg';
					_rev: 'Ie6fVHtvyZrIK4CVBrQaEd';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-21T02:38:08Z';
					assetId: '5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcGAwj/xAAoEAABBAECBAYDAAAAAAAAAAABAAIDBAUGEQcSIXETFSIjQXJRYYH/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQF/8QAHREAAgIBBQAAAAAAAAAAAAAAAAECERQDEyEyQf/aAAwDAQACEQMRAD8A876csT17wlNY2G9RylpIBPyrdofPcQMpNFTpW4oa8TQPEsx8rWt7/KzOO1XimV2Qxtjpgn3GSQ9ewctPh9eYutFJDYsiWLcFjI4yf4oJas76mhtRqnIlvFDE5GLWl/zCZlqy8hzpYh6Xb/hFYZ8rgMi8WIqYAcNvc6EnsiPJa4oXjp+ktkiYZBzNDvsF1DhC1xjYwbfpEUaZfJIOyM7TsC0D6oiJgs//2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#4f4032';
								foreground: '#fff';
								population: 1.39;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#67300a';
								foreground: '#fff';
								population: 0.94;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#93633f';
								foreground: '#fff';
								population: 7.79;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c7b9a8';
								foreground: '#000';
								population: 7.29;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#f0ccaf';
								foreground: '#000';
								population: 0.49;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#93633f';
								foreground: '#fff';
								population: 7.79;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ca8129';
								foreground: '#fff';
								population: 1.99;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theAllAmerican.jpg';
					path: 'images/codowsse/production/5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0-600x600.jpg';
					sha1hash: '5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0';
					size: 56580;
					uploadId: 'o1v6JCutSkQiDR5J3wawUkCXu6nSzAn8';
					url: 'https://cdn.sanity.io/images/codowsse/production/5b6c99e4831ec27e5bcfc86911d3af8f5bb639f0-600x600.jpg';
				};
			};
			ingredients: ['gravy', 'bacon', 'cheddar', 'eggs', 'dairy', 'flour'];
			name: 'The All American';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		},
		{
			_createdAt: '2021-07-22T15:24:11Z';
			_id: 'eec1afe6-0c00-4c16-86be-e5f555da1049';
			_rev: 'FzDSKLL6XBCyQU7PEgg5bZ';
			_type: 'crepe';
			_updatedAt: '2021-07-22T15:25:49Z';
			image: {
				_type: 'mainImage';
				alt: 'The Chipotle Chicken crepe';
				asset: {
					_createdAt: '2021-07-22T15:23:12Z';
					_id: 'image-78f8ae1ca90ee98159a7c0f01809dce827ecf741-600x600-jpg';
					_rev: 'FzDSKLL6XBCyQU7PEgflKu';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-22T15:23:12Z';
					assetId: '78f8ae1ca90ee98159a7c0f01809dce827ecf741';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBgUH/8QAKBAAAQMEAQMCBwAAAAAAAAAAAgEDBAAFBhESBxMhFUEiMTJhcdHh/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABsRAQACAwEBAAAAAAAAAAAAAAEAAgMRIQQj/9oADAMBAAIRAxEAPwDDwpsjMZLow7M/IlqSKfbH4C/K1NfQyGwZTZJl6tBxIERwdE2PIBH32qVt8b6p4pZ4npuOxWozILpCdXSn91Wo8m6pMiveK5QH4yjoouuaLU2T1WVNcjcfnqatvs856tXNm8Zk9NtT6OxnGgXkHy353SrN0znBJUrvJj7oESIpo0XEeXvpKUkchwJX8bdWUpeGWkHVAReROKr9f8rjQcTtsgz7nf8ABa8Gn6pSjJZB0zFKimyZW6QWY9ykstckBtxRHz7UpSqKroiE6z//2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#3b5e4d';
								foreground: '#fff';
								population: 4.04;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#b24c19';
								foreground: '#fff';
								population: 0.69;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#3b5e4d';
								foreground: '#fff';
								population: 4.04;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d4c8b5';
								foreground: '#000';
								population: 0.21;
								title: '#000';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#fcd8b8';
								foreground: '#000';
								population: 0.9;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#747d8a';
								foreground: '#fff';
								population: 2.42;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ca813b';
								foreground: '#fff';
								population: 3.46;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_turkeyBacon.jpg';
					path: 'images/codowsse/production/78f8ae1ca90ee98159a7c0f01809dce827ecf741-600x600.jpg';
					sha1hash: '78f8ae1ca90ee98159a7c0f01809dce827ecf741';
					size: 65168;
					uploadId: 'L4vwBThQWyQx8US2lOMxO6jhBOjIq3we';
					url: 'https://cdn.sanity.io/images/codowsse/production/78f8ae1ca90ee98159a7c0f01809dce827ecf741-600x600.jpg';
				};
			};
			ingredients: ['chicken', 'coleslaw', 'tomato', 'chipotle ranch', 'eggs', 'dairy', 'flour'];
			name: 'The Chipotle Chicken';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		},
		{
			_createdAt: '2021-05-24T02:57:23Z';
			_id: 'da5ff0ca-9d96-4efe-9e97-21fa1b987881';
			_rev: 'FzDSKLL6XBCyQU7PEgfYdh';
			_type: 'crepe';
			_updatedAt: '2021-07-22T15:21:13Z';
			image: {
				_type: 'mainImage';
				alt: 'A Montecristo crepe garnished with jam.';
				asset: {
					_createdAt: '2021-07-21T01:18:27Z';
					_id: 'image-310592278de4abc4b707aa722365e8114f9b5840-600x600-jpg';
					_rev: 'RBCv8cyNQSU8UohoBnoBPn';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-21T01:18:27Z';
					assetId: '310592278de4abc4b707aa722365e8114f9b5840';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAwYHCP/EACUQAAIBAwMEAgMAAAAAAAAAAAECAwAEBQYREhMxQVEWIWFxgf/EABgBAAMBAQAAAAAAAAAAAAAAAAMEBQAC/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQARAgMSMSH/2gAMAwEAAhEDEQA/AJustTLmITZ4e3nvGVgzPEu6jb81UHN3CngcdOzgblVG5H8q6sbRMvg4TovJRpCUHOAOFbl5381j+IZ7Gp10hM9xsDyjf7FR32uZW14lX1NZm1jBHIUkgmRh3Vl2IpXTILLGSwRvnRi4b4qOaTMvIfulHMRPGBdiNXPJgu7qwlM1jczW8nuNytWKa21NInSbN33D11DSlNh8ijIjyy3DGW4mllkbuzuSTSlK05n/2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#463627';
								foreground: '#fff';
								population: 9.94;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#742d18';
								foreground: '#fff';
								population: 7.46;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#cdb598';
								foreground: '#000';
								population: 9.94;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#cdb598';
								foreground: '#000';
								population: 9.94;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#dcc6a4';
								foreground: '#000';
								population: 5.09;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#a9815d';
								foreground: '#fff';
								population: 7.15;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ac7938';
								foreground: '#fff';
								population: 0.53;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_monteCristo.jpg';
					path: 'images/codowsse/production/310592278de4abc4b707aa722365e8114f9b5840-600x600.jpg';
					sha1hash: '310592278de4abc4b707aa722365e8114f9b5840';
					size: 58422;
					uploadId: 'W1JyEEV0PpRAYqNiyfx2WxgzK9Gwk0SU';
					url: 'https://cdn.sanity.io/images/codowsse/production/310592278de4abc4b707aa722365e8114f9b5840-600x600.jpg';
				};
			};
			ingredients: ['ham', 'turkey', 'provolone', 'cheddar', 'raspberry', 'eggs', 'dairy', 'flour'];
			name: 'The Montecristo';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		},
		{
			_createdAt: '2021-07-22T15:21:28Z';
			_id: '374ee54a-4f84-4718-89dd-54ac28c4e10a';
			_rev: 'D5jwD4g6kogHyj4fP4jPbI';
			_type: 'crepe';
			_updatedAt: '2021-07-22T15:22:32Z';
			image: {
				_type: 'mainImage';
				alt: 'The Black Bean crepe';
				asset: {
					_createdAt: '2021-07-22T15:21:41Z';
					_id: 'image-f01012fc094654bc6869af635516f5e9cf9a5191-600x600-jpg';
					_rev: 'mRsNjqBh7j0H88tnJzPlCt';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-07-22T15:21:41Z';
					assetId: 'f01012fc094654bc6869af635516f5e9cf9a5191';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcEAQP/xAAlEAACAgICAQIHAAAAAAAAAAABAgMEABEFIRIGUQciMUFhgaH/xAAXAQADAQAAAAAAAAAAAAAAAAACAwUE/8QAHREAAgMAAgMAAAAAAAAAAAAAAAECAxESMSEyQf/aAAwDAQACEQMRAD8Al3pz4f35rCzpIqqrBjvof3Kx6Rp8h6f5GS8HW6kjEskTDYOsnq8zUuyCSS3JVYfMYJthPL8EfbO8Hy5p2ZCeVgjOyyhNuCTkd2X9os8KOL3sqnLcxHYutJKkkbkdqw7GM8qPOQWakUk0MViQjuSQeJP69sYStn9YlRjnqSMeM+2lRGIP01mqvVg2NRIN+wxjE74N0ktNkxaB/CN2CgdDeMYw0KZ//9k=';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#36221c';
								foreground: '#fff';
								population: 0.47;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#5e1307';
								foreground: '#fff';
								population: 5.09;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d2c9bb';
								foreground: '#000';
								population: 7.67;
								title: '#000';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d2c9bb';
								foreground: '#000';
								population: 7.67;
								title: '#000';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#f1d2a4';
								foreground: '#000';
								population: 1.34;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#a78f64';
								foreground: '#fff';
								population: 6.05;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#d38849';
								foreground: '#000';
								population: 3.26;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theBlackBean.jpg';
					path: 'images/codowsse/production/f01012fc094654bc6869af635516f5e9cf9a5191-600x600.jpg';
					sha1hash: 'f01012fc094654bc6869af635516f5e9cf9a5191';
					size: 74204;
					uploadId: 'HHRzM6EG58z1jy8qDTYczBdIW3MSKIQp';
					url: 'https://cdn.sanity.io/images/codowsse/production/f01012fc094654bc6869af635516f5e9cf9a5191-600x600.jpg';
				};
			};
			ingredients: [
				'black bean',
				'avocado',
				'tomato',
				'spinach',
				'lime',
				'salsa',
				'eggs',
				'dairy',
				'flour'
			];
			name: 'The Black Bean';
			price: {
				full: '11.95';
				mini: '8.50';
			};
		}
	];
	sweets: [
		{
			_createdAt: '2021-05-13T22:31:41Z';
			_id: '2cb436f3-6aac-4347-8829-f80ef6ff737f';
			_rev: 'xngI5P3maVkXbNZYYfj5Mc';
			_type: 'crepe';
			_updatedAt: '2021-05-24T02:50:49Z';
			image: {
				_type: 'mainImage';
				alt: 'A lemon crepe garnished with whipped crème';
				asset: {
					_createdAt: '2021-05-13T22:30:21Z';
					_id: 'image-8088e6e7b72c0589b068ce8fa0096b5d34523f63-600x600-jpg';
					_rev: 'qwTh4Z3WS4K2LsDntbco8q';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-05-13T22:30:21Z';
					assetId: '8088e6e7b72c0589b068ce8fa0096b5d34523f63';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAwYHCP/EACUQAAIBBAICAAcAAAAAAAAAAAECAwAEBREGEgchEyIjMTJRYf/EABcBAAMBAAAAAAAAAAAAAAAAAAECBAX/xAAeEQACAgEFAQAAAAAAAAAAAAAAAQIRAwQTFCExof/aAAwDAQACEQMRAD8A884bj91mZTDZxO03oKuvua774R8bHEZA3PJYdHY6Ix+Xf9rJxq84ky2bYi7FtMB9TsQrbq/zLpNAqxchhjRG7jco2TWdPUTTpRsvWGPrdGw8vwWNu8y0vwk/AD0KVTLyO2WNFklNy4XRkQejSl5GR+x+g2kurOCrY24YajHupUdrBG21jAP7pSlt0VNKyUL24iHRJWCilKURT//Z';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#5c4134';
								foreground: '#fff';
								population: 0.78;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#7f3906';
								foreground: '#fff';
								population: 0.66;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#a68463';
								foreground: '#fff';
								population: 8.69;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#cbbfae';
								foreground: '#000';
								population: 7.88;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#efd19f';
								foreground: '#000';
								population: 0.92;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#a68463';
								foreground: '#fff';
								population: 8.69;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c46409';
								foreground: '#fff';
								population: 0.02;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theLemon.jpg';
					path: 'images/codowsse/production/8088e6e7b72c0589b068ce8fa0096b5d34523f63-600x600.jpg';
					sha1hash: '8088e6e7b72c0589b068ce8fa0096b5d34523f63';
					size: 51715;
					uploadId: 'rL9T3J1FtpPOKhPbu5NGX27cnXAOHdaj';
					url: 'https://cdn.sanity.io/images/codowsse/production/8088e6e7b72c0589b068ce8fa0096b5d34523f63-600x600.jpg';
				};
				caption: 'The Lemon Crepe';
			};
			ingredients: ['lemon', 'sugar', 'eggs', 'dairy', 'flour'];
			name: 'The Lemon';
			price: {
				full: '7.00';
				mini: '6.00';
			};
		},
		{
			_createdAt: '2021-05-13T22:34:57Z';
			_id: '43a67ad6-94ed-44e6-80a1-abdc20f51b8c';
			_rev: '95YGxQwhuQh7nD1GdAcDWt';
			_type: 'crepe';
			_updatedAt: '2021-05-13T22:36:01Z';
			image: {
				_type: 'mainImage';
				alt: 'A chocolate crepe garnished with whipped creme';
				asset: {
					_createdAt: '2021-05-13T22:35:14Z';
					_id: 'image-96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c-600x600-jpg';
					_rev: '95YGxQwhuQh7nD1GdAbyYX';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-05-13T22:35:14Z';
					assetId: '96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcDBQb/xAAlEAABBAIBAwQDAAAAAAAAAAACAQMEBQARBhIicRMUITFBYcH/xAAXAQEBAQEAAAAAAAAAAAAAAAACBQME/8QAHREAAgEFAQEAAAAAAAAAAAAAAAECERIhMVEDsf/aAAwDAQACEQMRAD8AlvD+N3MlxCY3Gjul3Ou9qZVqSnua20jFGkxZMcB0QgabJc8laXlZzAxKLNGuVsEEGnS6U34ziQ6x+vtUeO9jttAuxNJH8TJUk5Sx8LHnK1ZeyyWNrJSWaOQJIkn4Qd4zkwOb1wQ2hlFImvIOieFNIvjGK+XTG1cIt7CMjZmrSKX7zWHAi736I7+F8Yxgq6HQ0qmjs19g+hstCn0msYxiSQXs/9k=';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#48302c';
								foreground: '#fff';
								population: 0.07;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#783e08';
								foreground: '#fff';
								population: 0.2;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ccb69e';
								foreground: '#000';
								population: 2.42;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ccb69e';
								foreground: '#000';
								population: 2.42;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#e7c7a1';
								foreground: '#000';
								population: 1.92;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ab814b';
								foreground: '#fff';
								population: 1.23;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c89133';
								foreground: '#000';
								population: 0.85;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theChocolate.jpg';
					path: 'images/codowsse/production/96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c-600x600.jpg';
					sha1hash: '96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c';
					size: 63827;
					uploadId: 'z6iwb3MGfAs9rxd3k0d34XQYgLNaDwVc';
					url: 'https://cdn.sanity.io/images/codowsse/production/96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c-600x600.jpg';
				};
				caption: 'The Chocolate crepe';
			};
			ingredients: ['chocolate', 'raspberry', 'eggs', 'dairy', 'flour'];
			name: 'The Chocolate';
			price: {
				full: '9.00';
				mini: '7.50';
			};
			slug: {
				_type: 'slug';
				current: 'the-chocolate';
			};
		},
		{
			_createdAt: '2021-05-13T22:34:42Z';
			_id: '9032a893-2f28-42c6-8602-b08d2d033109';
			_rev: 'qwTh4Z3WS4K2LsDntbdpbx';
			_type: 'crepe';
			_updatedAt: '2021-05-13T22:34:42Z';
			image: {
				_type: 'mainImage';
				alt: 'A peanut butter crepe garnished with whipped crème and banana';
				asset: {
					_createdAt: '2021-05-13T22:33:36Z';
					_id: 'image-117b795c210cd559615143899bd173d48c23e631-600x600-jpg';
					_rev: '95YGxQwhuQh7nD1GdAbYby';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-05-13T22:33:36Z';
					assetId: '117b795c210cd559615143899bd173d48c23e631';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgf/xAAlEAABBAICAAYDAAAAAAAAAAABAAIDEQQFBhITFCEiMXEjUWH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgUA/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECAxETMUFR/9oADAMBAAIRAxEAPwDGcG2XK9pssd7cCsXse0/Wg0EfNrXZer51HrhNPuIM13iEeWaRfW/QgrP6jmmBnayLFnypcGgA6IHq2v4QraLZ6KF34tw+r9PcXEfSi5clJ6mC1Kb06sR8g5LjMETxKxzflrm2UV+3meH0Y2ODzIaK8WSgXIgtMblr4cOEcbpKLG19KdFGxlBrGi/0ERO+gek4R9QOrngVdAoiLAP/2Q==';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#654a3c';
								foreground: '#fff';
								population: 0.12;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#612804';
								foreground: '#fff';
								population: 0.47;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#cbb69b';
								foreground: '#000';
								population: 8.16;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#cbb69b';
								foreground: '#000';
								population: 8.16;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#eec39d';
								foreground: '#000';
								population: 2.67;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ae835a';
								foreground: '#fff';
								population: 7.28;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c4540c';
								foreground: '#fff';
								population: 0;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_thePeanutButter.jpg';
					path: 'images/codowsse/production/117b795c210cd559615143899bd173d48c23e631-600x600.jpg';
					sha1hash: '117b795c210cd559615143899bd173d48c23e631';
					size: 62398;
					uploadId: 'a12x6VjpEmAq6QCA9HADVWwOHjqh1UfP';
					url: 'https://cdn.sanity.io/images/codowsse/production/117b795c210cd559615143899bd173d48c23e631-600x600.jpg';
				};
				caption: 'The Peanut Butter crepe';
			};
			ingredients: ['peanut butter', 'banana', 'eggs', 'dairy', 'flour'];
			name: 'The Peanut Butter';
			price: {
				full: '9.00';
				mini: '7.50';
			};
			slug: {
				_type: 'slug';
				current: 'the-peanut-butter';
			};
		},
		{
			_createdAt: '2021-05-13T22:37:29Z';
			_id: '1450e7ce-1601-4504-8629-96e4c2643531';
			_rev: 'qwTh4Z3WS4K2LsDntbeYsD';
			_type: 'crepe';
			_updatedAt: '2021-05-13T22:37:29Z';
			image: {
				_type: 'mainImage';
				alt: 'A Nutella crepe garnished with whipped crème';
				asset: {
					_createdAt: '2021-05-13T22:36:26Z';
					_id: 'image-983870d22042b7a5f894f256edd532e6510efdbd-600x600-jpg';
					_rev: 'qwTh4Z3WS4K2LsDntbeIOB';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-05-13T22:36:26Z';
					assetId: '983870d22042b7a5f894f256edd532e6510efdbd';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwQI/8QAIRAAAgIDAAICAwAAAAAAAAAAAQQCAwAFEQYSIVEUIzH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAgX/xAAeEQADAAIBBQAAAAAAAAAAAAAAAQIDESEEMUFRkf/aAAwDAQACEQMRAD8AxXX611p2tbYvVpGcgPWQ+c0zxXwfZVNWMpbOh6hWEoxjE8JBGVnaaosbxtm6Ftitg7XOiPuM7fHktugxRHU1OQF8v2SPR6Zj5Krwb/T4avbl/WWqWy26nKb1uzgOdAxk7U2F6xU6zUb4/EiT3GQrr2Q1KetHm9TZPIgfiOX0j6jMgZL0eRbi3gs2TUo/XvjGNtcBJ7k2q5eaIkzJJ/pJxjGCa5FI/9k=';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#5e3a2c';
								foreground: '#fff';
								population: 0.1;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#760a09';
								foreground: '#fff';
								population: 1.66;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c7a47d';
								foreground: '#000';
								population: 7.85;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c7a47d';
								foreground: '#000';
								population: 7.85;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#f4a079';
								foreground: '#000';
								population: 0.87;
								title: '#fff';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#a58062';
								foreground: '#fff';
								population: 7.84;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#cf291d';
								foreground: '#fff';
								population: 1.6;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theNutella.jpg';
					path: 'images/codowsse/production/983870d22042b7a5f894f256edd532e6510efdbd-600x600.jpg';
					sha1hash: '983870d22042b7a5f894f256edd532e6510efdbd';
					size: 71907;
					uploadId: '38CALjRaHaoRx77DkeWe4XJlMkGCgOmo';
					url: 'https://cdn.sanity.io/images/codowsse/production/983870d22042b7a5f894f256edd532e6510efdbd-600x600.jpg';
				};
				caption: 'The Nutella crepe';
			};
			ingredients: ['Nutella', 'strawberry', 'eggs', 'dairy', 'flour'];
			name: 'The Nutella';
			price: {
				full: '9.00';
				mini: '7.50';
			};
			slug: {
				_type: 'slug';
				current: 'the-nutella';
			};
		},
		{
			_createdAt: '2021-05-13T22:39:08Z';
			_id: '6fb3b062-eb20-4c60-ae15-28355f0283a3';
			_rev: '95YGxQwhuQh7nD1GdAd0pS';
			_type: 'crepe';
			_updatedAt: '2021-05-13T22:39:08Z';
			image: {
				_type: 'mainImage';
				alt: 'A mixed berry crepe garnished with whipped creme';
				asset: {
					_createdAt: '2021-05-13T22:35:14Z';
					_id: 'image-96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c-600x600-jpg';
					_rev: '95YGxQwhuQh7nD1GdAbyYX';
					_type: 'sanity.imageAsset';
					_updatedAt: '2021-05-13T22:35:14Z';
					assetId: '96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c';
					extension: 'jpg';
					metadata: {
						_type: 'sanity.imageMetadata';
						dimensions: {
							_type: 'sanity.imageDimensions';
							aspectRatio: 1;
							height: 600;
							width: 600;
						};
						hasAlpha: false;
						isOpaque: true;
						lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcDBQb/xAAlEAABBAIBAwQDAAAAAAAAAAACAQMEBQARBhIicRMUITFBYcH/xAAXAQEBAQEAAAAAAAAAAAAAAAACBQME/8QAHREAAgEFAQEAAAAAAAAAAAAAAAECERIhMVEDsf/aAAwDAQACEQMRAD8AlvD+N3MlxCY3Gjul3Ou9qZVqSnua20jFGkxZMcB0QgabJc8laXlZzAxKLNGuVsEEGnS6U34ziQ6x+vtUeO9jttAuxNJH8TJUk5Sx8LHnK1ZeyyWNrJSWaOQJIkn4Qd4zkwOb1wQ2hlFImvIOieFNIvjGK+XTG1cIt7CMjZmrSKX7zWHAi736I7+F8Yxgq6HQ0qmjs19g+hstCn0msYxiSQXs/9k=';
						palette: {
							_type: 'sanity.imagePalette';
							darkMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#48302c';
								foreground: '#fff';
								population: 0.07;
								title: '#fff';
							};
							darkVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#783e08';
								foreground: '#fff';
								population: 0.2;
								title: '#fff';
							};
							dominant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ccb69e';
								foreground: '#000';
								population: 2.42;
								title: '#fff';
							};
							lightMuted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ccb69e';
								foreground: '#000';
								population: 2.42;
								title: '#fff';
							};
							lightVibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#e7c7a1';
								foreground: '#000';
								population: 1.92;
								title: '#000';
							};
							muted: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#ab814b';
								foreground: '#fff';
								population: 1.23;
								title: '#fff';
							};
							vibrant: {
								_type: 'sanity.imagePaletteSwatch';
								background: '#c89133';
								foreground: '#000';
								population: 0.85;
								title: '#fff';
							};
						};
					};
					mimeType: 'image/jpeg';
					originalFilename: 'crepe_theChocolate.jpg';
					path: 'images/codowsse/production/96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c-600x600.jpg';
					sha1hash: '96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c';
					size: 63827;
					uploadId: 'z6iwb3MGfAs9rxd3k0d34XQYgLNaDwVc';
					url: 'https://cdn.sanity.io/images/codowsse/production/96e43ba9a9ef7df56b9bc15fc3d72406f4436a5c-600x600.jpg';
				};
				caption: 'The Mixed Berry crepe';
			};
			ingredients: ['cream cheese', 'strawberry', 'blueberry', 'eggs', 'dairy', 'flour'];
			name: 'The Mixed Berry';
			price: {
				full: '9.00';
				mini: '7.50';
			};
			slug: {
				_type: 'slug';
				current: 'the-mixed-berry';
			};
		}
	];
}
