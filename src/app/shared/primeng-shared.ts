// src/app/shared/primeng-shared.ts
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';

// Exportas una lista única con todos los componentes
export const PRIMENG_COMPONENTS = [
  ButtonModule,
  CardModule,
  InputTextModule,
  ToastModule,
  GalleriaModule
] as const;
