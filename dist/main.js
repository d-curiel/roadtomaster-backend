"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const document_builder_1 = require("@nestjs/swagger/dist/document-builder");
const swagger_module_1 = require("@nestjs/swagger/dist/swagger-module");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new document_builder_1.DocumentBuilder()
        .setTitle('Roat to Master')
        .setDescription('Road To Master API operations')
        .setVersion('1.0')
        .addTag('champions')
        .build();
    const document = swagger_module_1.SwaggerModule.createDocument(app, options);
    swagger_module_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map