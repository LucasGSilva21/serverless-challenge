import { Logger, INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export async function setupSwagger(
  app: INestApplication,
  isServerless = false,
): Promise<any> {
  const logger: Logger = new Logger('Swagger');
  const swaggerEndpoint = '/api-docs';

  const options = new DocumentBuilder()
    .setTitle('Lutien API')
    .setDescription('Lutien API documentation')
    .setVersion('0.0.1')
    .addBearerAuth()
    .setBasePath('/api/')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerEndpoint, app, document);

  logger.log(`Added swagger on endpoint ${swaggerEndpoint}`);
}
