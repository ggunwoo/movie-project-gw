![alt text](https://raw.githubusercontent.com/gunw-96/images/main/README_images/next_movie-images/nextjs-banner.png)

<br />

> ***프로젝트*** : 영화 웹사이트 포트폴리오
>
> ***프로젝트 분류*** : 1인 토이 프로젝트
>
> ***참여분야*** : 프론트엔드 개발
>
> ***제작기간*** : 24.03 ~ 현재 진행 중

<br />

> Vercel Link   
> <https://nextjs-movies-two-black.vercel.app/>

<br />
<br />
<br />

## **0. 시작 가이드**



#### - 설치
```bash
$ git clone https://github.com/pgw6541/movie-project-gunw.git
```

#### - 실행
> Node.js 18.17 이상
```bash
$ cd movie-project-gunw
$ nvm use v.18.17.1
$ npm install
$ npm run dev
```

<br />
<br />
<br />

## **1. 개발**

#### # 환경

![VSCODE](https://img.shields.io/badge/VISUAL&nbsp;STUDIO&nbsp;CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=#007ACC)
![GITHUB](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white)
![VERCEL](https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white)



#### # 기술

![Typescript](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/REACT-181717?style=for-the-badge&logo=react&logoColor=#61DAFB)
![NEXTJS](https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![SCSS](https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)

<br />
<br />
<br />

## **2. 화면 구성**

| 메인 페이지 | 디테일페이지 |
|:---------------:|:---------------:|
| <img width="600" src="https://raw.githubusercontent.com/gunw-96/images/main/README_images/next_movie-images/main-page.png" /> | <img width="300" src="https://raw.githubusercontent.com/gunw-96/images/main/README_images/next_movie-images/detail-page.PNG" /> |

|출연진 소개 페이지|관련 비디오 페이지|비슷한 영화 추천 페이지
|:---------------:|:---------------:|:---------------:|
| <img width="300" src="https://raw.githubusercontent.com/gunw-96/images/main/README_images/next_movie-images/credits-page.png" /> | <img width="300" src="https://raw.githubusercontent.com/gunw-96/images/main/README_images/next_movie-images/videos-page.png" /> | <img width="300" src="https://raw.githubusercontent.com/gunw-96/images/main/README_images/next_movie-images/similar-page.png" /> |

<br />
<br />
<br />

##  **3. Movie API**
> https://nomad-movies.nomadcoders.workers.dev/
>
> Made by Nomad Coders ( <https://www.youtube.com/@nomadcoders> )

<br />
<br />
<br />


## **4. 프로젝트 디렉토리 구조**
```bash
c:\movie-project-gunw/
├── app/
│   ├── layout.tsx
│   ├── not-found.tsx
│   │
│   ├── (home)/ # 메인 페이지
│   │   ├── loding.tsx
│   │   └── page.tsx
│   │
│   └── movies/[id] # 동적 라우팅(Dynamic Routing) 
│       ├── layout.tsx
│       ├── page.tsx # 디테일 페이지
│       ├── error.tsx
│       ├── loading.tsx
│       └── (content)/ # movie/[id]/...
│           ├── credit/
│           │   └─ page.tsx
│           ├── similar/
│           │   └── page.tsx
│           └── video/
│               └─ page.tsx
│
├── components/
│   ├── detail-page/
│   │   ├── movie-poster.tsx
│   │   ├── movie-info.tsx
│   │   ├── movie-about.tsx
│   │   ├── movie-credits.tsx
│   │   ├── movie-similar.tsx
│   │   ├── movie-similar-genres.tsx
│   │   └── movie-videos.tsx
│   ├── navigation.tsx
│   └── movie.tsx
│
├── public/
│   ├── favicon.ico
│   └── Placeholder Images..
│      # 대체 이미지(정적)
├── styles/
│   ├── glocal.scss
│   ├── detail-page/
│   │   ├── movie-content.module.scss
│   │   ├── movie-info.module.scss
│   │   ├── movie-page.module.scss
│   │   └── movie-poster.module.scss 
│   ├── home.module.scss
│   └── movie.module.scss
│   
├── types/
│   └── global.d.ts
├── utils/
│   ├── contents.ts
│   └── getData.ts # 영화 정보 get호출
│
├── README.md
├── next.config.js
├── tsconfig.json
├── package-lock.json
├── next-env.d.ts
└── package.json
```
> 2024-04-05 수정