import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true
        })
    );

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    await app.listen(3000);
}
bootstrap();
