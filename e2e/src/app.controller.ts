import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: ['1', '2']
})
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello world!';
  }

  @Get('/versioned')
  getVersioned(): string {
    return 'Versioned';
  }

  @Get('/versioned-v2-v3')
  @Version(['2', '3'])
  getVersionedV2andV3(): string {
    return 'Versioned V2 and V3';
  }

  @Get('/versioned-v3')
  @Version('3')
  getVersionedV3(): string {
    return 'Versioned V3';
  }

  @Get('/versioned-neutral')
  @Version(VERSION_NEUTRAL)
  getVersionedNeutral(): string {
    return 'Version neutral';
  }

  @Get(['alias1', 'alias2'])
  withAliases(): string {
    return 'Hello world!';
  }

  @Get('express[:]colon[:]another/:prop')
  withColonExpress(): string {
    return 'Hello world!';
  }

  @Get('fastify::colon::another/:prop')
  withColonFastify(): string {
    return 'Hello world!';
  }
}
