import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export async function setupSwagger(
  app: INestApplication
): Promise<any> {
  const swaggerEndpoint = '/api-docs';

  const options = new DocumentBuilder()
    .setTitle('Serverless Challenge API')
    .setDescription('Serverless Challenge API documentation')
    .setVersion('0.0.1')
    .setBasePath('/api/')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(swaggerEndpoint, app, document);
}
