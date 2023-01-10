import Vue from 'vue'

import { OwlUIComponent } from './component'

export type Component = OwlUIComponent

export function install(vue: typeof Vue): void

import { OwlButton } from './packages/button'

export class Button extends OwlButton { }
