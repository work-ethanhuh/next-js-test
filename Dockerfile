# 베이스 이미지 설정
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 종속성 설치
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 소스 코드 복사
COPY . .

# 빌드 명령 실행
RUN yarn build

# Next.js 앱 실행
CMD ["yarn", "start"]