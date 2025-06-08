"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    const port = configService.get('PORT') || 3000;
    const appName = configService.get('APP_NAME') || 'Books API';
    const appVersion = configService.get('APP_VERSION') || '1.0.0';
    await app.listen(port);
    console.log(`🚀 ${appName} v${appVersion} is running on: http://localhost:${port}`);
    console.log(`📊 Environment: ${configService.get('NODE_ENV')}`);
    console.log(`🗄️  Database: ${configService.get('MONGODB_URI')}`);
}
bootstrap();
//# sourceMappingURL=main.js.map