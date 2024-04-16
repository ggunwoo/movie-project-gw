<br />

> ***프로젝트*** : 영화 웹사이트 포트폴리오
>
> ***프로젝트 분류*** : 개인 프로젝트
>
> ***참여분야*** : 프론트엔드 개발
>
> ***제작기간*** : 24.03 ~ 현재 진행 중

> 영문으로 작성된 영화API를 활용하여 웹사이트를 구현

> **Vercel Link**  
> <https://movies-gunw.vercel.app/>

<br />
<br />
<br />

## **- 시작가이드**

#### - 설치
```bash
$ git clone https://github.com/ggunwoo/movie-project-gunw.git
```

#### - Dev 서버 실행
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
![VERCEL](https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GIT](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)

#### # 기술

![Typescript](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/REACT-181717?style=for-the-badge&logo=react&logoColor=#61DAFB)

![NEXTJS](https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)  

> 편리한 서버측 렌더링, 다양한 최적화 기능을 활용할 수 있는 경험을 했습니다.  

![SCSS](https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)

> 파일을 분리하여 관리해야한다는 단점이 있지만 css와 동일하게 사용이 가능하며 `@mixin`과 `@media` 사용에 익숙하고 코드의 가독성이 좋아 사용했습니다.  

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

## **3. 고려사항**
> - ***이미지 렌더링 최적화 과정***  
> 이미지 사이즈 최적화, lazy loading 기능을 제공하는 Next/Image를 최대한 활용하여 이미지 호출시간을 감소시켜 초기 렌더링시 사용자에게 긍정적인 경험을 보장합니다.

> - ***CLS(Cumulative Layout Shift) 해결***  
> Next.js에 내장되어있는 loading UI 기능과 Suspense(fallback)을 사용하여 사용자에게 초기 렌더링시 Skeleton UI를 보여줌으로써 CLS 문제를 해결하였습니다.

> - ***동적 이미지 blur placeholder***  
> 사용자에게 skeleton UI 또한 너무 오래 노출된다면 부정적인 경험이 될 수 있다. 생각하여 동적 이미지 호출 시 블러처리된 이미지를 먼저 보여주기 위해 pla**i**ceholder와 sharp 라이브러리를 활용해 더욱 긍정적인 경험을 보장하였습니다.

<br />
<br />
<br />
<br />
<br />


##  **- 영화 API**
> https://nomad-movies.nomadcoders.workers.dev/
>
> Made by Nomad Coders ( <https://www.youtube.com/@nomadcoders> )

<br />
<br />
<br />


## **- 프로젝트 디렉토리 구조**
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
│           │   ├── page.tsx
│           │   └── loading.tsx
│           ├── similar/
│           │   ├── page.tsx
│           │   └── loading.tsx
│           └── video/
│               ├── page.tsx
│               └── loading.tsx
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
│   ├── footer.tsx
│   ├── loader.tsx
│   └── movie.tsx
│
├── lib/
│   └── getLocalBase64.ts # plaiceholder(Image blur)
│
├── public/
│   ├── favicon.ico
│   └── Placeholder Images..
│      # 대체 이미지(정적)
│
├── styles/
│   ├── glocal.scss
│   ├── _mixin_.scss
│   ├── detail-page/
│   │   ├── movie-content.module.scss
│   │   ├── movie-info.module.scss
│   │   ├── movie-page.module.scss
│   │   └── movie-poster.module.scss 
│   ├── footer.module.scss
│   ├── home.module.scss
│   ├── movie.module.scss
│   ├── navigation.module.scss
│   └── loading/
│       ├── loader-components.module.scss
│       ├── loading-content.module.scss
│       ├── loading-home.module.scss
│       └── loading-poster.module.scss
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
> <i>Update : 2024-04-15<i>