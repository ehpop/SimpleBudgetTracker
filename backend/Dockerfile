FROM openjdk:17-jdk-alpine

RUN apk add --no-cache maven

WORKDIR /backend
COPY pom.xml .
COPY src ./src

RUN mvn clean package

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
