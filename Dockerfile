# 베이스 이미지 설정
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 종속성 설치
COPY package*.json ./
RUN npm install --production

# 소스 코드 복사
# COPY /app ./app
# COPY ../next-env.d.ts ./
# COPY ../next.config.mjs ./
# COPY ../ts*.json ./
COPY . .

# 빌드 명령 실행
RUN npm run build

EXPOSE 3000

# Next.js 앱 실행
CMD ["npm", "start"]