FROM eclipse-temurin:17-jdk-alpine
WORKDIR /backend
COPY 'target/backend-0.0.1-SNAPSHOT.jar' .
EXPOSE 8080
ENTRYPOINT ["java","-jar","backend-0.0.1-SNAPSHOT.jar"]