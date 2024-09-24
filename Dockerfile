# 베이스 이미지 설정
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 종속성 설치
COPY package.json package-lock.json ./
RUN npm install -g next react react-dom

# 소스 코드 복사
COPY .next ./.next
COPY node_modules ./node_modules
COPY . .

# 빌드 명령 실행
RUN npm run build

EXPOSE 3000

# Next.js 앱 실행
CMD ["npm", "start"]