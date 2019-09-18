/*
 *
 * BookContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
         books: [
           {
             kind: 'books#volume',
             id: 'icFfQgAACAAJ',
             etag: 'zC+Zg0p0nWM',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/icFfQgAACAAJ',
             volumeInfo: {
               title: 'Rich Dad, Poor Dad',
               subtitle:
                 'What the Rich Teach Their Kids about Money - that the Poor and Middle Class Do Not!',
               authors: ['Robert T. Kiyosaki', 'Sharon L. Lechter'],
               publisher: 'Time Warner Books UK',
               publishedDate: '2000',
               description:
                 'Taking to heart the message that the poor and middle class work for money, but the rich have money work for them, the authors lay out a financial philosophy based on the principle that income-generating assets always provide healthier bottom-line results.',
               industryIdentifiers: [
                 {
                   type: 'ISBN_10',
                   identifier: '0751532711',
                 },
                 {
                   type: 'ISBN_13',
                   identifier: '9780751532715',
                 },
               ],
               readingModes: {
                 text: false,
                 image: false,
               },
               pageCount: 243,
               printType: 'BOOK',
               categories: ['Finance, Personal'],
               averageRating: 3.5,
               ratingsCount: 3383,
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: false,
               contentVersion: 'preview-1.0.0',
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=icFfQgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=icFfQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=icFfQgAACAAJ&dq=rich+dad&hl=&cd=1&source=gbs_api',
               infoLink:
                 'http://books.google.co.in/books?id=icFfQgAACAAJ&dq=rich+dad&hl=&source=gbs_api',
               canonicalVolumeLink:
                 'https://books.google.com/books/about/Rich_Dad_Poor_Dad.html?hl=&id=icFfQgAACAAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'NOT_FOR_SALE',
               isEbook: false,
             },
             accessInfo: {
               country: 'IN',
               viewability: 'NO_PAGES',
               embeddable: false,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: false,
               },
               pdf: {
                 isAvailable: false,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=icFfQgAACAAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'NONE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'This personal finance book teaches people how to become masters of their money and sustain wealth for themselves and their families.',
             },
           },
           {
             kind: 'books#volume',
             id: 'v8NTA2mHL5kC',
             etag: 'G7Jca9jD14g',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/v8NTA2mHL5kC',
             volumeInfo: {
               title: 'Rich Dad Poor Dad',
               subtitle:
                 'What the Rich Teach Their Kids About Money-That the Poor and the Middle Class Do Not!',
               authors: ['Robert T. Kiyosaki', 'Sharon L. Lechter'],
               publisher: 'Business Plus',
               publishedDate: '2001-01-15',
               description:
                 "Personal finance author and lecturer Robert T. Kiyosaki developed his unique economic perspective from two very different influences - his two fathers. This text lays out Kiyosaki's philosophy and his relationship with money.",
               industryIdentifiers: [
                 {
                   type: 'ISBN_13',
                   identifier: '9780759521438',
                 },
                 {
                   type: 'ISBN_10',
                   identifier: '0759521433',
                 },
               ],
               readingModes: {
                 text: true,
                 image: false,
               },
               pageCount: 272,
               printType: 'BOOK',
               categories: ['Business & Economics'],
               averageRating: 3.5,
               ratingsCount: 3399,
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: true,
               contentVersion: '0.0.1.0.preview.2',
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=v8NTA2mHL5kC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=v8NTA2mHL5kC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=v8NTA2mHL5kC&dq=rich+dad&hl=&cd=2&source=gbs_api',
               infoLink:
                 'http://books.google.co.in/books?id=v8NTA2mHL5kC&dq=rich+dad&hl=&source=gbs_api',
               canonicalVolumeLink:
                 'https://books.google.com/books/about/Rich_Dad_Poor_Dad.html?hl=&id=v8NTA2mHL5kC',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'NOT_FOR_SALE',
               isEbook: false,
             },
             accessInfo: {
               country: 'IN',
               viewability: 'NO_PAGES',
               embeddable: false,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: true,
               },
               pdf: {
                 isAvailable: true,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=v8NTA2mHL5kC&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'NONE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'Personal finance author and lecturer Robert T. Kiyosaki developed his unique economic perspective from two very different influences - his two fathers. This text lays out Kiyosaki&#39;s philosophy and his relationship with money.',
             },
           },
           {
             kind: 'books#volume',
             id: 'qGJrewAACAAJ',
             etag: 'vHriB5VxZrY',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/qGJrewAACAAJ',
             volumeInfo: {
               title: "Rich Dad's Cashflow Quadrant",
               subtitle: "Rich Dad's Guide to Financial Freedom",
               authors: ['Robert T. Kiyosaki'],
               publisher: 'Plata Pub',
               publishedDate: '2011-08-16',
               description:
                 'Learn how the role you play in the business world affects your ability to become financially free. There are four types of people who make up the world of business but its the business owners and the investors (not the employees and the self-employed) who can create great wealth by accelerating their cash flow through those assets. Rich Dads Cashflow Quadrant is perfect for individuals interested in finding new ways to generate cashflow.',
               industryIdentifiers: [
                 {
                   type: 'ISBN_10',
                   identifier: '1612680054',
                 },
                 {
                   type: 'ISBN_13',
                   identifier: '9781612680057',
                 },
               ],
               readingModes: {
                 text: false,
                 image: false,
               },
               pageCount: 282,
               printType: 'BOOK',
               categories: ['Business & Economics'],
               averageRating: 4.5,
               ratingsCount: 12,
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: false,
               contentVersion: 'preview-1.0.0',
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=qGJrewAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=qGJrewAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=qGJrewAACAAJ&dq=rich+dad&hl=&cd=3&source=gbs_api',
               infoLink:
                 'http://books.google.co.in/books?id=qGJrewAACAAJ&dq=rich+dad&hl=&source=gbs_api',
               canonicalVolumeLink:
                 'https://books.google.com/books/about/Rich_Dad_s_Cashflow_Quadrant.html?hl=&id=qGJrewAACAAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'NOT_FOR_SALE',
               isEbook: false,
             },
             accessInfo: {
               country: 'IN',
               viewability: 'NO_PAGES',
               embeddable: false,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: false,
               },
               pdf: {
                 isAvailable: false,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=qGJrewAACAAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'NONE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'Learn how the role you play in the business world affects your ability to become financially free.',
             },
           },
           {
             kind: 'books#volume',
             id: 'EgDioQEACAAJ',
             etag: 'OOyxepdBAYk',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/EgDioQEACAAJ',
             volumeInfo: {
               title: "Rich Dad's Conspiracy of the Rich",
               subtitle: 'The 8 New Rules of Money',
               authors: ['Robert T. Kiyosaki'],
               publishedDate: '2015-02-01',
               description:
                 'In late January, 2009, Robert Kiyosaki launched CONSPIRACY OF THE RICH - a free online book which was written in serial basis to help people understand how the current recession came about, and what they need to learn on how to survive through the coming rough years. An unprecedented publishing event for Kiyosaki and The Rich Dad Company, CONSPIRACY OF THE RICH is an interactive, Wiki-style project in which Kiyosaki has invited feedback, commentary, and questions from readers across the globe. The response so far has been totally fantastic. Millions and millions of readers have flocked to the website (www.conspiracyoftherich.com) to read what Robert has to say about the recession, and the readers have posted thousands of comments. Some of those reader comments will even be included in the final tradepaper version.',
               industryIdentifiers: [
                 {
                   type: 'ISBN_10',
                   identifier: '1612680712',
                 },
                 {
                   type: 'ISBN_13',
                   identifier: '9781612680712',
                 },
               ],
               readingModes: {
                 text: false,
                 image: false,
               },
               pageCount: 240,
               printType: 'BOOK',
               categories: ['Consumer education'],
               averageRating: 5,
               ratingsCount: 2,
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: false,
               contentVersion: 'preview-1.0.0',
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=EgDioQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=EgDioQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=EgDioQEACAAJ&dq=rich+dad&hl=&cd=4&source=gbs_api',
               infoLink:
                 'http://books.google.co.in/books?id=EgDioQEACAAJ&dq=rich+dad&hl=&source=gbs_api',
               canonicalVolumeLink:
                 'https://books.google.com/books/about/Rich_Dad_s_Conspiracy_of_the_Rich.html?hl=&id=EgDioQEACAAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'NOT_FOR_SALE',
               isEbook: false,
             },
             accessInfo: {
               country: 'IN',
               viewability: 'NO_PAGES',
               embeddable: false,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: false,
               },
               pdf: {
                 isAvailable: false,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=EgDioQEACAAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'NONE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'Shares Kiyosaki&#39;s view of global economics and explores why people are finding themselves challenged by these turbulent times.',
             },
           },
           {
             kind: 'books#volume',
             id: '8QFwvgAACAAJ',
             etag: 'E+vedcqAQZQ',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/8QFwvgAACAAJ',
             volumeInfo: {
               title: 'Rich Dad Poor Dad',
               subtitle:
                 'What the Rich Teach Their Kids about Money That the Poor and Middle Class Do Not!',
               authors: ['Robert T. Kiyosaki'],
               publishedDate: '2017-04',
               description:
                 "April 2017 marks 20 years since Robert Kiyosaki's Rich Dad Poor Dad first made waves in the Personal Finance arena. It has since become the #1 Personal Finance book of all time... translated into dozens of languages and sold around the world. Rich Dad Poor Dad is Robert's story of growing up with two dads -- his real father and the father of his best friend, his rich dad -- and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you. 20 Years... 20/20 Hindsight In the 20th Anniversary Edition of this classic, Robert offers an update on what we've seen over the past 20 years related to money, investing, and the global economy. Sidebars throughout the book will take readers \"fast forward\" -- from 1997 to today -- as Robert assesses how the principles taught by his rich dad have stood the test of time. In many ways, the messages of Rich Dad Poor Dad, messages that were criticized and challenged two decades ago, are more meaningful, relevant and important today than they were 20 years ago. As always, readers can expect that Robert will be candid, insightful... and continue to rock more than a few boats in his retrospective. Will there be a few surprises? Count on it. Rich Dad Poor Dad... * Explodes the myth that you need to earn a high income to become rich * Challenges the belief that your house is an asset * Shows parents why they can't rely on the school system to teach their kids about money * Defines once and for all an asset and a liability * Teaches you what to teach your kids about money for their future financial success",
               industryIdentifiers: [
                 {
                   type: 'ISBN_10',
                   identifier: '1612680194',
                 },
                 {
                   type: 'ISBN_13',
                   identifier: '9781612680194',
                 },
               ],
               readingModes: {
                 text: false,
                 image: false,
               },
               pageCount: 336,
               printType: 'BOOK',
               categories: ['Business & Economics'],
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: false,
               contentVersion: 'preview-1.0.0',
               panelizationSummary: {
                 containsEpubBubbles: false,
                 containsImageBubbles: false,
               },
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=8QFwvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=8QFwvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=8QFwvgAACAAJ&dq=rich+dad&hl=&cd=5&source=gbs_api',
               infoLink:
                 'http://books.google.co.in/books?id=8QFwvgAACAAJ&dq=rich+dad&hl=&source=gbs_api',
               canonicalVolumeLink:
                 'https://books.google.com/books/about/Rich_Dad_Poor_Dad.html?hl=&id=8QFwvgAACAAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'NOT_FOR_SALE',
               isEbook: false,
             },
             accessInfo: {
               country: 'IN',
               viewability: 'NO_PAGES',
               embeddable: false,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: false,
               },
               pdf: {
                 isAvailable: false,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=8QFwvgAACAAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'NONE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you. 20 Years... 20/20 Hindsight In the 20th Anniversary Edition of this classic, ...',
             },
           },
           {
             kind: 'books#volume',
             id: '2gWeHAAACAAJ',
             etag: 'OEbZBoh1Dyc',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/2gWeHAAACAAJ',
             volumeInfo: {
               title: 'Rich Dad, Poor Dad 2',
               subtitle:
                 'Cash Flow Quadrant : Employee, Self-employed, Business Owner, Or Investor ... which is the Best Quadrant for You?',
               authors: ['Robert T. Kiyosaki', 'Sharon L. Lechter'],
               publisher: 'Gardners Books',
               publishedDate: '2002',
               description:
                 'Taking to heart the message that the poor and middle class work for money, but the rich have money work for them, the authors lay out a financial philosophy based on the principle that income-generating assets always provide healthier bottom-line results.',
               industryIdentifiers: [
                 {
                   type: 'ISBN_10',
                   identifier: '0751532800',
                 },
                 {
                   type: 'ISBN_13',
                   identifier: '9780751532807',
                 },
               ],
               readingModes: {
                 text: false,
                 image: false,
               },
               pageCount: 309,
               printType: 'BOOK',
               categories: ['Business & Economics'],
               averageRating: 3,
               ratingsCount: 1,
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: false,
               contentVersion: 'preview-1.0.0',
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=2gWeHAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=2gWeHAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=2gWeHAAACAAJ&dq=rich+dad&hl=&cd=6&source=gbs_api',
               infoLink:
                 'http://books.google.co.in/books?id=2gWeHAAACAAJ&dq=rich+dad&hl=&source=gbs_api',
               canonicalVolumeLink:
                 'https://books.google.com/books/about/Rich_Dad_Poor_Dad_2.html?hl=&id=2gWeHAAACAAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'NOT_FOR_SALE',
               isEbook: false,
             },
             accessInfo: {
               country: 'IN',
               viewability: 'NO_PAGES',
               embeddable: false,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: false,
               },
               pdf: {
                 isAvailable: false,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=2gWeHAAACAAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'NONE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'Taking to heart the message that the poor and middle class work for money, but the rich have money work for them, the authors lay out a financial philosophy based on the principle that income-generating assets always provide healthier ...',
             },
           },
           {
             kind: 'books#volume',
             id: 'B4WKDwAAQBAJ',
             etag: 'eXP3ljfzBAQ',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/B4WKDwAAQBAJ',
             volumeInfo: {
               title: 'Summary of Rich Dad Poor Dad by Robert Kiyosaki',
               authors: ['BookSuma Publishing'],
               publisher: 'BookSuma Publishing',
               publishedDate: '2018-09-01',
               description:
                 "Rich Dad Poor Dad by Robert Kiyosaki - A BookSuma Book Summary **Please note that this summary of Rich Dad Poor Dad by Robert Kiyosaki is NOT the original book. This book was written and published by BookSuma and is not affiliated with or endorsed by Robert Kiyosaki.** Kiyosaki's bestselling book, Rich Dad Poor Dad, has changed the way millions have looked at investing and wealth. It teaches us that We don't need to earn a huge income to become rich Knowing the difference between assets and liabilities is the key to becoming wealthy Houses aren't always assets There's more to wealth building than education and job security Knowledge, particularly about certain things, is power The BookSuma Summary of Rich Dad Poor Dad by Robert Kiyosaki brings you the main takeaways from the book in less than half an hour! Our experts have read and extracted the most important points from Rich Dad Poor Dad, distilling those key points into an easy-to-read summary for your convenience. Our passion is helping busy people maximize their time and personal growth. Instantly download your copy and get started learning and growing today!",
               industryIdentifiers: [
                 {
                   type: 'ISBN_13',
                   identifier: '9781386412113',
                 },
                 {
                   type: 'ISBN_10',
                   identifier: '1386412112',
                 },
               ],
               readingModes: {
                 text: true,
                 image: true,
               },
               printType: 'BOOK',
               categories: ['Study Aids'],
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: true,
               contentVersion: '0.3.4.0.preview.3',
               panelizationSummary: {
                 containsEpubBubbles: false,
                 containsImageBubbles: false,
               },
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=B4WKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=B4WKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=B4WKDwAAQBAJ&printsec=frontcover&dq=rich+dad&hl=&cd=7&source=gbs_api',
               infoLink:
                 'https://play.google.com/store/books/details?id=B4WKDwAAQBAJ&source=gbs_api',
               canonicalVolumeLink:
                 'https://play.google.com/store/books/details?id=B4WKDwAAQBAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'FOR_SALE',
               isEbook: true,
               listPrice: {
                 amount: 268.99,
                 currencyCode: 'INR',
               },
               retailPrice: {
                 amount: 188.29,
                 currencyCode: 'INR',
               },
               buyLink:
                 'https://play.google.com/store/books/details?id=B4WKDwAAQBAJ&rdid=book-B4WKDwAAQBAJ&rdot=1&source=gbs_api',
               offers: [
                 {
                   finskyOfferType: 1,
                   listPrice: {
                     amountInMicros: 268990000,
                     currencyCode: 'INR',
                   },
                   retailPrice: {
                     amountInMicros: 188290000,
                     currencyCode: 'INR',
                   },
                 },
               ],
             },
             accessInfo: {
               country: 'IN',
               viewability: 'PARTIAL',
               embeddable: true,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: true,
               },
               pdf: {
                 isAvailable: true,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=B4WKDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'SAMPLE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'This book was written and published by BookSuma and is not affiliated with or endorsed by Robert Kiyosaki.** Kiyosaki&#39;s bestselling book, Rich Dad Poor Dad, has changed the way millions have looked at investing and wealth.',
             },
           },
           {
             kind: 'books#volume',
             id: 'yciKDwAAQBAJ',
             etag: 'J8fizXxHIAw',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/yciKDwAAQBAJ',
             volumeInfo: {
               title:
                 'Summary of Rich Dad Poor Dad: What The Rich Teach Their Kids About Money - That The Poor And Middle Class Do Not! by Robert T. Kiyosaki',
               authors: ['Readtrepreneur Publishing'],
               publisher: 'Readtrepreneur Publishing',
               publishedDate: '2018-06-11',
               description:
                 "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money - That the Poor and Middle Class Do Not! By Robert T. Kiyosaki | Book Summary | Readtrepreneur (Disclaimer: This is NOT the original book, but an unofficial summary.) The school system does a lousy job teaching students about money. So take in charge of your financial education so you can impart your wisdom to your kids. Rich Dad Poor Dad reveals the cruel truth; many people don't know enough about money for their financial future because the school system doesn't teach it to them. In order to debunk a handful of myths and provide the necessary knowledge to become successful, you need to challenge your beliefs and learn all about money; Rich Dad Poor Dad helps you to do just that. (Note: This summary is wholly written and published by readtrepreneur. It is not affiliated with the original author in any way) \"I'd rather welcome change than cling to the past.\" – Robert T. Kiyosaki You don't need a high income to become rich but before that, you must have an enriched mind. In Rich Dad Poor Dad, you will train your mind first so you have the necessary tools to get anything you want. Robert Kiyosaki stresses that you must educate your kids about money so they have a better life. You will be the most important source of knowledge for them because the school system won't provide what's expected. P.S. Rich Dad Poor Dad is an extremely useful book that will help you educate yourself so you can teach your kids the things that they might not learn anywhere else. The Time for Thinking is Over! Time for Action! Scroll Up Now and Click on the \"Buy now with 1-Click\" Button to Grab your Copy Right Away! Why Choose Us, Readtrepreneur? ● Highest Quality Summaries ● Delivers Amazing Knowledge ● Awesome Refresher ● Clear And Concise Disclaimer Once Again: This book is meant for a great companionship of the original book or to simply get the gist of the original book.",
               industryIdentifiers: [
                 {
                   type: 'ISBN_13',
                   identifier: '9781386096092',
                 },
                 {
                   type: 'ISBN_10',
                   identifier: '1386096091',
                 },
               ],
               readingModes: {
                 text: true,
                 image: true,
               },
               printType: 'BOOK',
               categories: ['Reference'],
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: true,
               contentVersion: '0.10.10.0.preview.3',
               panelizationSummary: {
                 containsEpubBubbles: false,
                 containsImageBubbles: false,
               },
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=yciKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=yciKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=yciKDwAAQBAJ&printsec=frontcover&dq=rich+dad&hl=&cd=8&source=gbs_api',
               infoLink:
                 'https://play.google.com/store/books/details?id=yciKDwAAQBAJ&source=gbs_api',
               canonicalVolumeLink:
                 'https://play.google.com/store/books/details?id=yciKDwAAQBAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'FOR_SALE',
               isEbook: true,
               listPrice: {
                 amount: 360.99,
                 currencyCode: 'INR',
               },
               retailPrice: {
                 amount: 252.69,
                 currencyCode: 'INR',
               },
               buyLink:
                 'https://play.google.com/store/books/details?id=yciKDwAAQBAJ&rdid=book-yciKDwAAQBAJ&rdot=1&source=gbs_api',
               offers: [
                 {
                   finskyOfferType: 1,
                   listPrice: {
                     amountInMicros: 360990000,
                     currencyCode: 'INR',
                   },
                   retailPrice: {
                     amountInMicros: 252690000,
                     currencyCode: 'INR',
                   },
                 },
               ],
             },
             accessInfo: {
               country: 'IN',
               viewability: 'PARTIAL',
               embeddable: true,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: true,
               },
               pdf: {
                 isAvailable: true,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=yciKDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'SAMPLE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'Why Choose Us, Readtrepreneur? ● Highest Quality Summaries ● Delivers Amazing Knowledge ● Awesome Refresher ● Clear And Concise Disclaimer Once Again: This book is meant for a great companionship of the original book or to simply ...',
             },
           },
           {
             kind: 'books#volume',
             id: 'kDAfGw0yeV0C',
             etag: 'RfozhkWyZwg',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/kDAfGw0yeV0C',
             volumeInfo: {
               title: 'Trump: Think Like a Billionaire',
               subtitle:
                 'Everything You Need to Know About Success, Real Estate, and Life',
               authors: ['Donald J. Trump', 'Meredith McIver'],
               publisher: 'Random House',
               publishedDate: '2004-10-12',
               description:
                 'It’s not good enough to want it. You’ve got to know how to get it. Real estate titan, bestselling author, and TV star Donald J. Trump is the man to teach you the billionaire mind-set–how to think about money, career skills, and life. Here is crucial advice on investing in real estate from the expert, everything from dealing with brokers to renovating to assessing the value of property, buying and selling, and securing a mortgage. Trump will show you how to cut costs, decide how much risk to assume in your investments, and divide up your portfolio. He’ll also teach you how to impress anyone, how to correct or criticize someone effectively, and how to know if your friends are loyal–everything you need to know to get ahead. And once you’ve earned your money, you’ve got to learn to spend it well. Trump presents his consumer guide to the best things in life, from wine to golf clubs to engagement rings. Check out the billionaire lifestyle–how they shop and what they buy. Even if you’re not superwealthy, you can afford many of these luxuries. And what look inside the Trump world would be complete without The Apprentice? Trump will take you behind the scenes, from the end of season one and into season two, with insights into the making and the meaning of TV’s hottest show. As Donald Trump proves, getting rich is easy. Staying rich is harder. Your chances are better, and you’ll have more fun, if you think like a billionaire. This is the book that will help you make a real difference in your life.',
               industryIdentifiers: [
                 {
                   type: 'ISBN_13',
                   identifier: '9781588364371',
                 },
                 {
                   type: 'ISBN_10',
                   identifier: '1588364372',
                 },
               ],
               readingModes: {
                 text: true,
                 image: false,
               },
               pageCount: 288,
               printType: 'BOOK',
               categories: ['Biography & Autobiography'],
               averageRating: 2.5,
               ratingsCount: 2,
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: true,
               contentVersion: '0.4.3.0.preview.2',
               panelizationSummary: {
                 containsEpubBubbles: false,
                 containsImageBubbles: false,
               },
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=kDAfGw0yeV0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=kDAfGw0yeV0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=kDAfGw0yeV0C&printsec=frontcover&dq=rich+dad&hl=&cd=9&source=gbs_api',
               infoLink:
                 'https://play.google.com/store/books/details?id=kDAfGw0yeV0C&source=gbs_api',
               canonicalVolumeLink:
                 'https://play.google.com/store/books/details?id=kDAfGw0yeV0C',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'FOR_SALE',
               isEbook: true,
               listPrice: {
                 amount: 481.44,
                 currencyCode: 'INR',
               },
               retailPrice: {
                 amount: 337.01,
                 currencyCode: 'INR',
               },
               buyLink:
                 'https://play.google.com/store/books/details?id=kDAfGw0yeV0C&rdid=book-kDAfGw0yeV0C&rdot=1&source=gbs_api',
               offers: [
                 {
                   finskyOfferType: 1,
                   listPrice: {
                     amountInMicros: 481440000,
                     currencyCode: 'INR',
                   },
                   retailPrice: {
                     amountInMicros: 337010000,
                     currencyCode: 'INR',
                   },
                 },
               ],
             },
             accessInfo: {
               country: 'IN',
               viewability: 'PARTIAL',
               embeddable: true,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
               epub: {
                 isAvailable: true,
                 acsTokenLink:
                   'http://books.google.co.in/books/download/Trump_Think_Like_a_Billionaire-sample-epub.acsm?id=kDAfGw0yeV0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
               },
               pdf: {
                 isAvailable: false,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=kDAfGw0yeV0C&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'SAMPLE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'As Donald Trump proves, getting rich is easy. Staying rich is harder. Your chances are better, and you’ll have more fun, if you think like a billionaire. This is the book that will help you make a real difference in your life.',
             },
           },
           {
             kind: 'books#volume',
             id: '51qAAQAACAAJ',
             etag: 'NS2XwT9vWh4',
             selfLink:
               'https://www.googleapis.com/books/v1/volumes/51qAAQAACAAJ',
             volumeInfo: {
               title: "Rich Dad's Guide to Investing",
               subtitle:
                 'What the Rich Invest In, that the Poor and Middle Class Do Not!',
               authors: ['Robert T. Kiyosaki'],
               publishedDate: '2014',
               description:
                 "Rich Dad's Guide to Investing is a guide to understanding the real earning power of money by learning some of the investing secrets of the wealthy.",
               industryIdentifiers: [
                 {
                   type: 'ISBN_10',
                   identifier: '0446589160',
                 },
                 {
                   type: 'ISBN_13',
                   identifier: '9780446589161',
                 },
               ],
               readingModes: {
                 text: false,
                 image: false,
               },
               printType: 'BOOK',
               categories: ['Business'],
               averageRating: 5,
               ratingsCount: 1,
               maturityRating: 'NOT_MATURE',
               allowAnonLogging: false,
               contentVersion: 'preview-1.0.0',
               panelizationSummary: {
                 containsEpubBubbles: false,
                 containsImageBubbles: false,
               },
               imageLinks: {
                 smallThumbnail:
                   'http://books.google.com/books/content?id=51qAAQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                 thumbnail:
                   'http://books.google.com/books/content?id=51qAAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
               },
               language: 'en',
               previewLink:
                 'http://books.google.co.in/books?id=51qAAQAACAAJ&dq=rich+dad&hl=&cd=10&source=gbs_api',
               infoLink:
                 'http://books.google.co.in/books?id=51qAAQAACAAJ&dq=rich+dad&hl=&source=gbs_api',
               canonicalVolumeLink:
                 'https://books.google.com/books/about/Rich_Dad_s_Guide_to_Investing.html?hl=&id=51qAAQAACAAJ',
             },
             saleInfo: {
               country: 'IN',
               saleability: 'NOT_FOR_SALE',
               isEbook: false,
             },
             accessInfo: {
               country: 'IN',
               viewability: 'NO_PAGES',
               embeddable: false,
               publicDomain: false,
               textToSpeechPermission: 'ALLOWED',
               epub: {
                 isAvailable: false,
               },
               pdf: {
                 isAvailable: false,
               },
               webReaderLink:
                 'http://play.google.com/books/reader?id=51qAAQAACAAJ&hl=&printsec=frontcover&source=gbs_api',
               accessViewStatus: 'NONE',
               quoteSharingAllowed: false,
             },
             searchInfo: {
               textSnippet:
                 'Rich Dad&#39;s Guide to Investing is a guide to understanding the real earning power of money by learning some of the investing secrets of the wealthy.',
             },
           },
         ],
       };

/* eslint-disable default-case, no-param-reassign */
const bookContainerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default bookContainerReducer;
