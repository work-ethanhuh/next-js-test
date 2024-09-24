# 베이스 이미지 설정
FROM node:18-alpine

# 작업 디렉토리 설정
RUN mkdir -p /app
WORKDIR /app
ADD ./ /app

# 종속성 설치
COPY package.json package-lock.json ./
RUN npm install -g pm2

# 소스 코드 복사
COPY . .

# 빌드 명령 실행
RUN npm run build

# Next.js 앱 실행
CMD ["npm", "start"]