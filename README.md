# SASS STYLER
Modular scss utility library to build better styles faster

## INSTALL

```bash
npm i sass-styler
```

<!-- start automated part -->
## MODULES

Styler is made up of 3 main modules

<details>
<summary><strong>Animation</strong> - sass versions of animista - <a href="doc/animation.md">read docs</a></summary>

* Mixins
  * `@include animate-bg-pan-bottom-left()`
  * `@include animate-bg-pan-bottom-right()`
  * `@include animate-bg-pan-bottom()`
  * `@include animate-bg-pan-left()`
  * `@include animate-bg-pan-right()`
  * `@include animate-bg-pan-top-left()`
  * `@include animate-bg-pan-top-right()`
  * `@include animate-bg-pan-top()`
  * `@include animate-blink-alternative()`
  * `@include animate-blink()`
  * `@include animate-blur-out-contract-backward()`
  * `@include animate-blur-out-contract()`
  * `@include animate-blur-out-expand-forward()`
  * `@include animate-blur-out-expand()`
  * `@include animate-bounce-bottom()`
  * `@include animate-bounce-in-backward()`
  * `@include animate-bounce-in-bottom()`
  * `@include animate-bounce-in-forward()`
  * `@include animate-bounce-in-left()`
  * `@include animate-bounce-in-right()`
  * `@include animate-bounce-in-top()`
  * `@include animate-bounce-left()`
  * `@include animate-bounce-out-backward()`
  * `@include animate-bounce-out-bottom()`
  * `@include animate-bounce-out-forward()`
  * `@include animate-bounce-out-left()`
  * `@include animate-bounce-out-right()`
  * `@include animate-bounce-out-top()`
  * `@include animate-bounce-right()`
  * `@include animate-bounce-top()`
  * `@include animate-bounce()`
  * `@include animate-color-change-2x()`
  * `@include animate-color-change-3x()`
  * `@include animate-color-change-4x()`
  * `@include animate-color-change-5x()`
  * `@include animate-fade-in-backward()`
  * `@include animate-fade-in-bottom-left()`
  * `@include animate-fade-in-bottom-right()`
  * `@include animate-fade-in-bottom()`
  * `@include animate-fade-in-forward()`
  * `@include animate-fade-in-left()`
  * `@include animate-fade-in-right()`
  * `@include animate-fade-in-top-left()`
  * `@include animate-fade-in-top-right()`
  * `@include animate-fade-in-top()`
  * `@include animate-fade-in()`
  * `@include animate-fade-out-backward()`
  * `@include animate-fade-out-bottom-left()`
  * `@include animate-fade-out-bottom-right()`
  * `@include animate-fade-out-bottom()`
  * `@include animate-fade-out-forward()`
  * `@include animate-fade-out-left()`
  * `@include animate-fade-out-right()`
  * `@include animate-fade-out-top-left()`
  * `@include animate-fade-out-top-right()`
  * `@include animate-fade-out-top()`
  * `@include animate-fade-out()`
  * `@include animate-flicker-1()`
  * `@include animate-flicker-2()`
  * `@include animate-flicker-3()`
  * `@include animate-flicker-4()`
  * `@include animate-flicker-5()`
  * `@include animate-flicker-in-1()`
  * `@include animate-flicker-in-2()`
  * `@include animate-flicker-out-1()`
  * `@include animate-flicker-out-2()`
  * `@include animate-flip-2-horizontal-bottom-1()`
  * `@include animate-flip-2-horizontal-bottom-2()`
  * `@include animate-flip-2-horizontal-bottom-backward()`
  * `@include animate-flip-2-horizontal-bottom-forward()`
  * `@include animate-flip-2-horizontal-top-1()`
  * `@include animate-flip-2-horizontal-top-2()`
  * `@include animate-flip-2-horizontal-top-backward()`
  * `@include animate-flip-2-horizontal-top-forward()`
  * `@include animate-flip-2-vertical-left-1()`
  * `@include animate-flip-2-vertical-left-2()`
  * `@include animate-flip-2-vertical-left-backward()`
  * `@include animate-flip-2-vertical-left-forward()`
  * `@include animate-flip-2-vertical-right-1()`
  * `@include animate-flip-2-vertical-right-2()`
  * `@include animate-flip-2-vertical-right-backward()`
  * `@include animate-flip-2-vertical-right-forward()`
  * `@include animate-flip-diagonal-1-backward()`
  * `@include animate-flip-diagonal-1-bottom-left()`
  * `@include animate-flip-diagonal-1-forward()`
  * `@include animate-flip-diagonal-1-top-right()`
  * `@include animate-flip-diagonal-2-backward()`
  * `@include animate-flip-diagonal-2-bottom-right()`
  * `@include animate-flip-diagonal-2-forward()`
  * `@include animate-flip-diagonal-2-top-left()`
  * `@include animate-flip-horizontal-backward()`
  * `@include animate-flip-horizontal-bottom()`
  * `@include animate-flip-horizontal-forward()`
  * `@include animate-flip-horizontal-top()`
  * `@include animate-flip-in-diagonal-1-bottom-left()`
  * `@include animate-flip-in-diagonal-1-top-right()`
  * `@include animate-flip-in-diagonal-2-bottom-right()`
  * `@include animate-flip-in-diagonal-2-top-left()`
  * `@include animate-flip-in-horizontal-bottom()`
  * `@include animate-flip-in-horizontal-top()`
  * `@include animate-flip-in-vertical-left()`
  * `@include animate-flip-in-vertical-right()`
  * `@include animate-flip-out-diagonal-1-bottom-left()`
  * `@include animate-flip-out-diagonal-1-top-right()`
  * `@include animate-flip-out-diagonal-2-bottom-right()`
  * `@include animate-flip-out-diagonal-2-top-left()`
  * `@include animate-flip-out-horizontal-bottom()`
  * `@include animate-flip-out-horizontal-top()`
  * `@include animate-flip-out-vertical-left()`
  * `@include animate-flip-out-vertical-right()`
  * `@include animate-flip-scale-2-horizontal-bottom()`
  * `@include animate-flip-scale-2-horizontal-top()`
  * `@include animate-flip-scale-2-vertical-left()`
  * `@include animate-flip-scale-2-vertical-right()`
  * `@include animate-flip-scale-down-diagonal-1()`
  * `@include animate-flip-scale-down-diagonal-2()`
  * `@include animate-flip-scale-down-horizontal()`
  * `@include animate-flip-scale-down-vertical()`
  * `@include animate-flip-scale-up-diagonal-1()`
  * `@include animate-flip-scale-up-diagonal-2()`
  * `@include animate-flip-scale-up-horizontal()`
  * `@include animate-flip-scale-up-vertical()`
  * `@include animate-flip-vertical-backward()`
  * `@include animate-flip-vertical-forward()`
  * `@include animate-flip-vertical-left()`
  * `@include animate-flip-vertical-right()`
  * `@include animate-focus-in-contract-backward()`
  * `@include animate-focus-in-contract()`
  * `@include animate-focus-in-expand-forward()`
  * `@include animate-focus-in-expand()`
  * `@include animate-jello-diagonal-1()`
  * `@include animate-jello-diagonal-2()`
  * `@include animate-jello-horizontal()`
  * `@include animate-jello-vertical()`
  * `@include animate-jello()`
  * `@include animate-kenburns-bottom-left()`
  * `@include animate-kenburns-bottom-right()`
  * `@include animate-kenburns-bottom()`
  * `@include animate-kenburns-left()`
  * `@include animate-kenburns-right()`
  * `@include animate-kenburns-top-left()`
  * `@include animate-kenburns-top-right()`
  * `@include animate-kenburns-top()`
  * `@include animate-ping()`
  * `@include animate-puff-in-bottom-left()`
  * `@include animate-puff-in-bottom-right()`
  * `@include animate-puff-in-bottom()`
  * `@include animate-puff-in-center()`
  * `@include animate-puff-in-horizontal()`
  * `@include animate-puff-in-left()`
  * `@include animate-puff-in-right()`
  * `@include animate-puff-in-top-left()`
  * `@include animate-puff-in-top-right()`
  * `@include animate-puff-in-top()`
  * `@include animate-puff-in-vertical()`
  * `@include animate-puff-out-bottom-left()`
  * `@include animate-puff-out-bottom-right()`
  * `@include animate-puff-out-bottom()`
  * `@include animate-puff-out-center()`
  * `@include animate-puff-out-horizontal()`
  * `@include animate-puff-out-left()`
  * `@include animate-puff-out-right()`
  * `@include animate-puff-out-top-left()`
  * `@include animate-puff-out-top-right()`
  * `@include animate-puff-out-top()`
  * `@include animate-puff-out-vertical()`
  * `@include animate-pulsate-backward()`
  * `@include animate-pulsate-forward()`
  * `@include animate-pulsate()`
  * `@include animate-roll-in-blurred-bottom()`
  * `@include animate-roll-in-blurred-left()`
  * `@include animate-roll-in-blurred-right()`
  * `@include animate-roll-in-blurred-top()`
  * `@include animate-roll-in-bottom()`
  * `@include animate-roll-in-left()`
  * `@include animate-roll-in-right()`
  * `@include animate-roll-in-top()`
  * `@include animate-roll-in()`
  * `@include animate-roll-out-blurred-bottom()`
  * `@include animate-roll-out-blurred-left()`
  * `@include animate-roll-out-blurred-right()`
  * `@include animate-roll-out-blurred-top()`
  * `@include animate-roll-out-bottom()`
  * `@include animate-roll-out-left()`
  * `@include animate-roll-out-right()`
  * `@include animate-roll-out-top()`
  * `@include animate-roll-out()`
  * `@include animate-rotate-90-bottom-clock-wise()`
  * `@include animate-rotate-90-bottom-counter-clock-wise()`
  * `@include animate-rotate-90-bottom-left-clock-wise()`
  * `@include animate-rotate-90-bottom-left-counter-clock-wise()`
  * `@include animate-rotate-90-bottom-right-clock-wise()`
  * `@include animate-rotate-90-bottom-right-counter-clock-wise()`
  * `@include animate-rotate-90-clock-wise()`
  * `@include animate-rotate-90-counter-clock-wise()`
  * `@include animate-rotate-90-horizontal-backward()`
  * `@include animate-rotate-90-horizontal-forward()`
  * `@include animate-rotate-90-left-clock-wise()`
  * `@include animate-rotate-90-left-counter-clock-wise()`
  * `@include animate-rotate-90-right-clock-wise()`
  * `@include animate-rotate-90-right-counter-clock-wise()`
  * `@include animate-rotate-90-top-clock-wise()`
  * `@include animate-rotate-90-top-counter-clock-wise()`
  * `@include animate-rotate-90-top-left-clock-wise()`
  * `@include animate-rotate-90-top-left-counter-clock-wise()`
  * `@include animate-rotate-90-top-right-clock-wise()`
  * `@include animate-rotate-90-top-right-counter-clock-wise()`
  * `@include animate-rotate-90-vertical-backward()`
  * `@include animate-rotate-90-vertical-forward()`
  * `@include animate-rotate-bottom-left()`
  * `@include animate-rotate-bottom-right()`
  * `@include animate-rotate-bottom()`
  * `@include animate-rotate-center()`
  * `@include animate-rotate-diagonal-1()`
  * `@include animate-rotate-diagonal-2()`
  * `@include animate-rotate-diagonal-bottom-left()`
  * `@include animate-rotate-diagonal-bottom-right()`
  * `@include animate-rotate-diagonal-top-left()`
  * `@include animate-rotate-diagonal-top-right()`
  * `@include animate-rotate-horizontal-bottom()`
  * `@include animate-rotate-horizontal-center()`
  * `@include animate-rotate-horizontal-top()`
  * `@include animate-rotate-in-2-backward()`
  * `@include animate-rotate-in-2-bottom-left-clock-wise()`
  * `@include animate-rotate-in-2-bottom-left-counter-clock-wise()`
  * `@include animate-rotate-in-2-bottom-right-clock-wise()`
  * `@include animate-rotate-in-2-bottom-right-counter-clock-wise()`
  * `@include animate-rotate-in-2-clock-wise()`
  * `@include animate-rotate-in-2-counter-clock-wise()`
  * `@include animate-rotate-in-2-forward()`
  * `@include animate-rotate-in-2-top-left-clock-wise()`
  * `@include animate-rotate-in-2-top-left-counter-clock-wise()`
  * `@include animate-rotate-in-2-top-right-clock-wise()`
  * `@include animate-rotate-in-2-top-right-counter-clock-wise()`
  * `@include animate-rotate-in-bottom-left()`
  * `@include animate-rotate-in-bottom-right()`
  * `@include animate-rotate-in-bottom()`
  * `@include animate-rotate-in-center()`
  * `@include animate-rotate-in-diagonal-1()`
  * `@include animate-rotate-in-diagonal-2()`
  * `@include animate-rotate-in-horizontal()`
  * `@include animate-rotate-in-left()`
  * `@include animate-rotate-in-right()`
  * `@include animate-rotate-in-top-left()`
  * `@include animate-rotate-in-top-right()`
  * `@include animate-rotate-in-top()`
  * `@include animate-rotate-in-vertical()`
  * `@include animate-rotate-left()`
  * `@include animate-rotate-out-2-backward()`
  * `@include animate-rotate-out-2-bottom-left-clock-wise()`
  * `@include animate-rotate-out-2-bottom-left-counter-clock-wise()`
  * `@include animate-rotate-out-2-bottom-right-clock-wise()`
  * `@include animate-rotate-out-2-bottom-right-counter-clock-wise()`
  * `@include animate-rotate-out-2-clock-wise()`
  * `@include animate-rotate-out-2-counter-clock-wise()`
  * `@include animate-rotate-out-2-forward()`
  * `@include animate-rotate-out-2-top-left-clock-wise()`
  * `@include animate-rotate-out-2-top-left-counter-clock-wise()`
  * `@include animate-rotate-out-2-top-right-clock-wise()`
  * `@include animate-rotate-out-2-top-right-counter-clock-wise()`
  * `@include animate-rotate-out-bottom-left()`
  * `@include animate-rotate-out-bottom-right()`
  * `@include animate-rotate-out-bottom()`
  * `@include animate-rotate-out-center()`
  * `@include animate-rotate-out-diagonal-1()`
  * `@include animate-rotate-out-diagonal-2()`
  * `@include animate-rotate-out-horizontal()`
  * `@include animate-rotate-out-left()`
  * `@include animate-rotate-out-right()`
  * `@include animate-rotate-out-top-left()`
  * `@include animate-rotate-out-top-right()`
  * `@include animate-rotate-out-top()`
  * `@include animate-rotate-out-vertical()`
  * `@include animate-rotate-right()`
  * `@include animate-rotate-scale-down-diagonal-1()`
  * `@include animate-rotate-scale-down-diagonal-2()`
  * `@include animate-rotate-scale-down-horizontal()`
  * `@include animate-rotate-scale-down-vertical()`
  * `@include animate-rotate-scale-down()`
  * `@include animate-rotate-scale-up-diagonal-1()`
  * `@include animate-rotate-scale-up-diagonal-2()`
  * `@include animate-rotate-scale-up-horizontal()`
  * `@include animate-rotate-scale-up-vertical()`
  * `@include animate-rotate-scale-up()`
  * `@include animate-rotate-top-left()`
  * `@include animate-rotate-top-right()`
  * `@include animate-rotate-top()`
  * `@include animate-rotate-vert-center()`
  * `@include animate-rotate-vert-left()`
  * `@include animate-rotate-vert-right()`
  * `@include animate-scale-down-bottom-left()`
  * `@include animate-scale-down-bottom-right()`
  * `@include animate-scale-down-bottom()`
  * `@include animate-scale-down-center()`
  * `@include animate-scale-down-horizontal-center()`
  * `@include animate-scale-down-horizontal-left()`
  * `@include animate-scale-down-horizontal-right()`
  * `@include animate-scale-down-left()`
  * `@include animate-scale-down-right()`
  * `@include animate-scale-down-top-left()`
  * `@include animate-scale-down-top-right()`
  * `@include animate-scale-down-top()`
  * `@include animate-scale-down-vertical-bottom()`
  * `@include animate-scale-down-vertical-center()`
  * `@include animate-scale-down-vertical-top()`
  * `@include animate-scale-in-bottom-left()`
  * `@include animate-scale-in-bottom-right()`
  * `@include animate-scale-in-bottom()`
  * `@include animate-scale-in-center()`
  * `@include animate-scale-in-horizontal-center()`
  * `@include animate-scale-in-horizontal-left()`
  * `@include animate-scale-in-horizontal-right()`
  * `@include animate-scale-in-left()`
  * `@include animate-scale-in-right()`
  * `@include animate-scale-in-top-left()`
  * `@include animate-scale-in-top-right()`
  * `@include animate-scale-in-top()`
  * `@include animate-scale-in-vertical-bottom()`
  * `@include animate-scale-in-vertical-center()`
  * `@include animate-scale-in-vertical-top()`
  * `@include animate-scale-out-bottom-left()`
  * `@include animate-scale-out-bottom-right()`
  * `@include animate-scale-out-bottom()`
  * `@include animate-scale-out-center()`
  * `@include animate-scale-out-horizontal-left()`
  * `@include animate-scale-out-horizontal-right()`
  * `@include animate-scale-out-horizontal()`
  * `@include animate-scale-out-left()`
  * `@include animate-scale-out-right()`
  * `@include animate-scale-out-top-left()`
  * `@include animate-scale-out-top-right()`
  * `@include animate-scale-out-top()`
  * `@include animate-scale-out-vertical-bottom()`
  * `@include animate-scale-out-vertical-top()`
  * `@include animate-scale-out-vertical()`
  * `@include animate-scale-up-bottom-left()`
  * `@include animate-scale-up-bottom-right()`
  * `@include animate-scale-up-bottom()`
  * `@include animate-scale-up-center()`
  * `@include animate-scale-up-horizontal-center()`
  * `@include animate-scale-up-horizontal-left()`
  * `@include animate-scale-up-horizontal-right()`
  * `@include animate-scale-up-left()`
  * `@include animate-scale-up-right()`
  * `@include animate-scale-up-top-left()`
  * `@include animate-scale-up-top-right()`
  * `@include animate-scale-up-top()`
  * `@include animate-scale-up-vertical-bottom()`
  * `@include animate-scale-up-vertical-center()`
  * `@include animate-scale-up-vertical-top()`
  * `@include animate-shadow-drop-2-bottom-left()`
  * `@include animate-shadow-drop-2-bottom-right()`
  * `@include animate-shadow-drop-2-bottom()`
  * `@include animate-shadow-drop-2-center()`
  * `@include animate-shadow-drop-2-left-right()`
  * `@include animate-shadow-drop-2-left()`
  * `@include animate-shadow-drop-2-right()`
  * `@include animate-shadow-drop-2-top-bottom()`
  * `@include animate-shadow-drop-2-top-left()`
  * `@include animate-shadow-drop-2-top-right()`
  * `@include animate-shadow-drop-2-top()`
  * `@include animate-shadow-drop-bottom-left()`
  * `@include animate-shadow-drop-bottom-right()`
  * `@include animate-shadow-drop-bottom()`
  * `@include animate-shadow-drop-center()`
  * `@include animate-shadow-drop-left-right()`
  * `@include animate-shadow-drop-left()`
  * `@include animate-shadow-drop-right()`
  * `@include animate-shadow-drop-top-bottom()`
  * `@include animate-shadow-drop-top-left()`
  * `@include animate-shadow-drop-top-right()`
  * `@include animate-shadow-drop-top()`
  * `@include animate-shadow-inset-bottom-left()`
  * `@include animate-shadow-inset-bottom-right()`
  * `@include animate-shadow-inset-bottom()`
  * `@include animate-shadow-inset-center()`
  * `@include animate-shadow-inset-left-right()`
  * `@include animate-shadow-inset-left()`
  * `@include animate-shadow-inset-right()`
  * `@include animate-shadow-inset-top-bottom()`
  * `@include animate-shadow-inset-top-left()`
  * `@include animate-shadow-inset-top-right()`
  * `@include animate-shadow-inset-top()`
  * `@include animate-shadow-pop-bottom-left()`
  * `@include animate-shadow-pop-bottom-right()`
  * `@include animate-shadow-pop-top-left()`
  * `@include animate-shadow-pop-top-right()`
  * `@include animate-shake-bottom-left()`
  * `@include animate-shake-bottom-right()`
  * `@include animate-shake-bottom()`
  * `@include animate-shake-horizontal()`
  * `@include animate-shake-left-right()`
  * `@include animate-shake-left()`
  * `@include animate-shake-right()`
  * `@include animate-shake-top-left()`
  * `@include animate-shake-top-right()`
  * `@include animate-shake-top()`
  * `@include animate-shake-vertical()`
  * `@include animate-shake()`
  * `@include animate-slide-backward-bottom-left()`
  * `@include animate-slide-backward-bottom-right()`
  * `@include animate-slide-backward-bottom()`
  * `@include animate-slide-backward-center()`
  * `@include animate-slide-backward-left()`
  * `@include animate-slide-backward-right()`
  * `@include animate-slide-backward-top-left()`
  * `@include animate-slide-backward-top-right()`
  * `@include animate-slide-backward-top()`
  * `@include animate-slide-bottom-left()`
  * `@include animate-slide-bottom-right()`
  * `@include animate-slide-bottom()`
  * `@include animate-slide-forward-bottom-left()`
  * `@include animate-slide-forward-bottom-right()`
  * `@include animate-slide-forward-bottom()`
  * `@include animate-slide-forward-center()`
  * `@include animate-slide-forward-left()`
  * `@include animate-slide-forward-right()`
  * `@include animate-slide-forward-top-left()`
  * `@include animate-slide-forward-top-right()`
  * `@include animate-slide-forward-top()`
  * `@include animate-slide-in-backward-bottom-left()`
  * `@include animate-slide-in-backward-bottom-right()`
  * `@include animate-slide-in-backward-bottom()`
  * `@include animate-slide-in-backward-center()`
  * `@include animate-slide-in-backward-left()`
  * `@include animate-slide-in-backward-right()`
  * `@include animate-slide-in-backward-top-left()`
  * `@include animate-slide-in-backward-top-right()`
  * `@include animate-slide-in-backward-top()`
  * `@include animate-slide-in-blurred-bottom-left()`
  * `@include animate-slide-in-blurred-bottom-right()`
  * `@include animate-slide-in-blurred-bottom()`
  * `@include animate-slide-in-blurred-left()`
  * `@include animate-slide-in-blurred-right()`
  * `@include animate-slide-in-blurred-top-left()`
  * `@include animate-slide-in-blurred-top-right()`
  * `@include animate-slide-in-blurred-top()`
  * `@include animate-slide-in-bottom-left()`
  * `@include animate-slide-in-bottom-right()`
  * `@include animate-slide-in-bottom()`
  * `@include animate-slide-in-elliptic-bottom-backward()`
  * `@include animate-slide-in-elliptic-bottom-forward()`
  * `@include animate-slide-in-elliptic-left-backward()`
  * `@include animate-slide-in-elliptic-left-forward()`
  * `@include animate-slide-in-elliptic-right-backward()`
  * `@include animate-slide-in-elliptic-right-forward()`
  * `@include animate-slide-in-elliptic-top-backward()`
  * `@include animate-slide-in-elliptic-top-forward()`
  * `@include animate-slide-in-forward-bottom-left()`
  * `@include animate-slide-in-forward-bottom-right()`
  * `@include animate-slide-in-forward-bottom()`
  * `@include animate-slide-in-forward-center()`
  * `@include animate-slide-in-forward-left()`
  * `@include animate-slide-in-forward-right()`
  * `@include animate-slide-in-forward-top-left()`
  * `@include animate-slide-in-forward-top-right()`
  * `@include animate-slide-in-forward-top()`
  * `@include animate-slide-in-left()`
  * `@include animate-slide-in-right()`
  * `@include animate-slide-in-top-left()`
  * `@include animate-slide-in-top-right()`
  * `@include animate-slide-in-top()`
  * `@include animate-slide-left()`
  * `@include animate-slide-out-backward-bottom-left()`
  * `@include animate-slide-out-backward-bottom-right()`
  * `@include animate-slide-out-backward-bottom()`
  * `@include animate-slide-out-backward-center()`
  * `@include animate-slide-out-backward-left()`
  * `@include animate-slide-out-backward-right()`
  * `@include animate-slide-out-backward-top-left()`
  * `@include animate-slide-out-backward-top-right()`
  * `@include animate-slide-out-backward-top()`
  * `@include animate-slide-out-blurred-bottom-left()`
  * `@include animate-slide-out-blurred-bottom-right()`
  * `@include animate-slide-out-blurred-bottom()`
  * `@include animate-slide-out-blurred-left()`
  * `@include animate-slide-out-blurred-right()`
  * `@include animate-slide-out-blurred-top-left()`
  * `@include animate-slide-out-blurred-top-right()`
  * `@include animate-slide-out-blurred-top()`
  * `@include animate-slide-out-bottom-left()`
  * `@include animate-slide-out-bottom-right()`
  * `@include animate-slide-out-bottom()`
  * `@include animate-slide-out-elliptic-bottom-backward()`
  * `@include animate-slide-out-elliptic-bottom-forward()`
  * `@include animate-slide-out-elliptic-left-backward()`
  * `@include animate-slide-out-elliptic-left-forward()`
  * `@include animate-slide-out-elliptic-right-backward()`
  * `@include animate-slide-out-elliptic-right-forward()`
  * `@include animate-slide-out-elliptic-top-backward()`
  * `@include animate-slide-out-elliptic-top-forward()`
  * `@include animate-slide-out-forward-bottom-left()`
  * `@include animate-slide-out-forward-bottom-right()`
  * `@include animate-slide-out-forward-bottom()`
  * `@include animate-slide-out-forward-center()`
  * `@include animate-slide-out-forward-left()`
  * `@include animate-slide-out-forward-right()`
  * `@include animate-slide-out-forward-top-left()`
  * `@include animate-slide-out-forward-top-right()`
  * `@include animate-slide-out-forward-top()`
  * `@include animate-slide-out-left()`
  * `@include animate-slide-out-right()`
  * `@include animate-slide-out-top-left()`
  * `@include animate-slide-out-top-right()`
  * `@include animate-slide-out-top()`
  * `@include animate-slide-right()`
  * `@include animate-slide-rotate-horizontal-b-backward()`
  * `@include animate-slide-rotate-horizontal-b-forward()`
  * `@include animate-slide-rotate-horizontal-bottom()`
  * `@include animate-slide-rotate-horizontal-t-backward()`
  * `@include animate-slide-rotate-horizontal-t-forward()`
  * `@include animate-slide-rotate-horizontal-top()`
  * `@include animate-slide-rotate-vertical-l-backward()`
  * `@include animate-slide-rotate-vertical-l-forward()`
  * `@include animate-slide-rotate-vertical-left()`
  * `@include animate-slide-rotate-vertical-r-backward()`
  * `@include animate-slide-rotate-vertical-r-forward()`
  * `@include animate-slide-rotate-vertical-right()`
  * `@include animate-slide-top-left()`
  * `@include animate-slide-top-right()`
  * `@include animate-slide-top()`
  * `@include animate-slit-in-diagonal-1()`
  * `@include animate-slit-in-diagonal-2()`
  * `@include animate-slit-in-horizontal()`
  * `@include animate-slit-in-vertical()`
  * `@include animate-slit-out-diagonal-1()`
  * `@include animate-slit-out-diagonal-2()`
  * `@include animate-slit-out-horizontal()`
  * `@include animate-slit-out-vertical()`
  * `@include animate-flash()`
  * `@include animate-head-shake()`
  * `@include animate-heartbeat()`
  * `@include animate-hinge()`
  * `@include animate-jack-in-the-box()`
  * `@include animate-rubber-band()`
  * `@include animate-tada()`
  * `@include animate-swing-bottom-backward()`
  * `@include animate-swing-bottom-forward()`
  * `@include animate-swing-bottom-left-backward()`
  * `@include animate-swing-bottom-left-forward()`
  * `@include animate-swing-bottom-right-backward()`
  * `@include animate-swing-bottom-right-forward()`
  * `@include animate-swing-in-bottom-backward()`
  * `@include animate-swing-in-bottom-forward()`
  * `@include animate-swing-in-left-backward()`
  * `@include animate-swing-in-left-forward()`
  * `@include animate-swing-in-right-backward()`
  * `@include animate-swing-in-right-forward()`
  * `@include animate-swing-in-top-backward()`
  * `@include animate-swing-in-top-forward()`
  * `@include animate-swing-left-backward()`
  * `@include animate-swing-left-forward()`
  * `@include animate-swing-out-bottom-backward()`
  * `@include animate-swing-out-bottom-forward()`
  * `@include animate-swing-out-left-backward()`
  * `@include animate-swing-out-left-forward()`
  * `@include animate-swing-out-right-backward()`
  * `@include animate-swing-out-right-forward()`
  * `@include animate-swing-out-top-backward()`
  * `@include animate-swing-out-top-forward()`
  * `@include animate-swing-right-backward()`
  * `@include animate-swing-right-forward()`
  * `@include animate-swing-top-backward()`
  * `@include animate-swing-top-forward()`
  * `@include animate-swing-top-left-backward()`
  * `@include animate-swing-top-left-forward()`
  * `@include animate-swing-top-right-backward()`
  * `@include animate-swing-top-right-forward()`
  * `@include animate-swing()`
  * `@include animate-swirl-in-backward()`
  * `@include animate-swirl-in-bottom-backward()`
  * `@include animate-swirl-in-bottom-forward()`
  * `@include animate-swirl-in-bottom-left-backward()`
  * `@include animate-swirl-in-bottom-left-forward()`
  * `@include animate-swirl-in-bottom-right-backward()`
  * `@include animate-swirl-in-bottom-right-forward()`
  * `@include animate-swirl-in-forward()`
  * `@include animate-swirl-in-left-backward()`
  * `@include animate-swirl-in-left-forward()`
  * `@include animate-swirl-in-right-backward()`
  * `@include animate-swirl-in-right-forward()`
  * `@include animate-swirl-in-top-backward()`
  * `@include animate-swirl-in-top-forward()`
  * `@include animate-swirl-in-top-left-backward()`
  * `@include animate-swirl-in-top-left-forward()`
  * `@include animate-swirl-in-top-right-backward()`
  * `@include animate-swirl-in-top-right-forward()`
  * `@include animate-swirl-out-backward()`
  * `@include animate-swirl-out-bottom-backward()`
  * `@include animate-swirl-out-bottom-forward()`
  * `@include animate-swirl-out-bottom-left-backward()`
  * `@include animate-swirl-out-bottom-left-forward()`
  * `@include animate-swirl-out-bottom-right-backward()`
  * `@include animate-swirl-out-bottom-right-forward()`
  * `@include animate-swirl-out-forward()`
  * `@include animate-swirl-out-left-backward()`
  * `@include animate-swirl-out-left-forward()`
  * `@include animate-swirl-out-right-backward()`
  * `@include animate-swirl-out-right-forward()`
  * `@include animate-swirl-out-top-backward()`
  * `@include animate-swirl-out-top-forward()`
  * `@include animate-swirl-out-top-left-backward()`
  * `@include animate-swirl-out-top-left-forward()`
  * `@include animate-swirl-out-top-right-backward()`
  * `@include animate-swirl-out-top-right-forward()`
  * `@include animate-text-blur-out()`
  * `@include animate-text-flicker-in-glow()`
  * `@include animate-text-flicker-out-glow()`
  * `@include animate-text-focus-in()`
  * `@include animate-text-pop-up-bottom-left()`
  * `@include animate-text-pop-up-bottom-right()`
  * `@include animate-text-pop-up-bottom()`
  * `@include animate-text-pop-up-left()`
  * `@include animate-text-pop-up-right()`
  * `@include animate-text-pop-up-top-left()`
  * `@include animate-text-pop-up-top-right()`
  * `@include animate-text-pop-up-top()`
  * `@include animate-text-shadow-drop-bottom-left()`
  * `@include animate-text-shadow-drop-bottom-right()`
  * `@include animate-text-shadow-drop-bottom()`
  * `@include animate-text-shadow-drop-center()`
  * `@include animate-text-shadow-drop-left()`
  * `@include animate-text-shadow-drop-right()`
  * `@include animate-text-shadow-drop-top-left()`
  * `@include animate-text-shadow-drop-top-right()`
  * `@include animate-text-shadow-drop-top()`
  * `@include animate-text-shadow-pop-bottom-left()`
  * `@include animate-text-shadow-pop-bottom-right()`
  * `@include animate-text-shadow-pop-bottom()`
  * `@include animate-text-shadow-pop-left()`
  * `@include animate-text-shadow-pop-right()`
  * `@include animate-text-shadow-pop-top-left()`
  * `@include animate-text-shadow-pop-top-right()`
  * `@include animate-text-shadow-pop-top()`
  * `@include animate-tracking-in-contract-backward-bottom()`
  * `@include animate-tracking-in-contract-backward-top()`
  * `@include animate-tracking-in-contract-backward()`
  * `@include animate-tracking-in-contract()`
  * `@include animate-tracking-in-expand-forward-bottom()`
  * `@include animate-tracking-in-expand-forward-top()`
  * `@include animate-tracking-in-expand-forward()`
  * `@include animate-tracking-in-expand()`
  * `@include animate-tracking-out-contract-backward-bottom()`
  * `@include animate-tracking-out-contract-backward-top()`
  * `@include animate-tracking-out-contract-backward()`
  * `@include animate-tracking-out-contract()`
  * `@include animate-tracking-out-expand-forward-bottom()`
  * `@include animate-tracking-out-expand-forward-top()`
  * `@include animate-tracking-out-expand-forward()`
  * `@include animate-tracking-out-expand()`
  * `@include animate-vibrate-1()`
  * `@include animate-vibrate-2()`
  * `@include animate-vibrate-3()`
  * `@include animate-wobble-horizontal-bottom()`
  * `@include animate-wobble-horizontal-top()`
  * `@include animate-wobble-vertical-left()`
  * `@include animate-wobble-vertical-right()`
  * `@include animate-wobble()`
</details>
<details>
<summary><strong>Theme</strong> - helpers to create your own design system - <a href="doc/theme.md">read docs</a></summary>

* Variables
  * `$asset-path`
  * `$var-prepend`
  * `$elevations`
  * `$font-families`
  * `$media-queries`
  * `$selectors`
  * `$sizes`
  * `$transition-settings`
* Functions
  * `asset()`
  * `get-var()`
  * `v()`
  * `elevation()`
  * `font-family()`
  * `select()`
  * `size()`
  * `s()`
* Mixins
  * `@include define-vars()`
  * `@include define-var()`
  * `@include elevation()`
  * `@include font-family()`
  * `@include media()`
  * `@include normalize()`
  * `@include reset()`
  * `@include select()`
  * `@include transition()`
</details>
<details>
<summary><strong>Utility</strong> - a huge array of mixins and functions - <a href="doc/utility.md">read docs</a></summary>

* Mixins
  * `@include angled-edge()`
  * `@include apply()`
  * `@include background-stripes()`
  * `@include clearfix()`
  * `@include container()`
  * `@include cover-link()`
  * `@include declare-map()`
  * `@include extend-background()`
  * `@include flex-grid()`
  * `@include hardware-accelerate()`
  * `@include hide-text-except-pseudo()`
  * `@include hide-visually()`
  * `@include horizontal-list()`
  * `@include increment-z-index()`
  * `@include inner-container()`
  * `@include keyframes()`
  * `@include loader()`
  * `@include menu-icon()`
  * `@include menu-icon-close()`
  * `@include object-fit()`
  * `@include on-circle()`
  * `@include pipe-list()`
  * `@include position()`
  * `@include pseudo-with-position()`
  * `@include pseudo()`
  * `@include replace-context()`
  * `@include responsive-ratio()`
  * `@include triangle()`
  * `@include truncate()`
  * `@include unhide-visually()`
  * `@include unstyled-list()`
* Functions
  * `best-contrast()`
  * `calc-add()`
  * `calc-substract()`
  * `cmyk()`
  * `color-from()`
  * `contrast-balance()`
  * `contrast-between()`
  * `contrast-ratio-by-name()`
  * `contrast-with()`
  * `decimal-round()`
  * `em-to-px()`
  * `em-to-rem()`
  * `ensure-unit()`
  * `escape-classname()`
  * `fallback()`
  * `get()`
  * `grid-column-width()`
  * `is-between()`
  * `is-contrasting()`
  * `is-property()`
  * `is-pseudo()`
  * `long-shadow()`
  * `luminance()`
  * `merge()`
  * `num-to-length()`
  * `px-to-em()`
  * `px-to-rem()`
  * `rem-to-em()`
  * `rem-to-px()`
  * `remove-nth()`
  * `remove()`
  * `responsive-font-size()`
  * `same-units()`
  * `scale-light()`
  * `scale-luminance()`
  * `select-after()`
  * `select-all-out-of-at-least()`
  * `select-all-out-of-at-most()`
  * `select-all-out-of-between()`
  * `select-before()`
  * `select-between()`
  * `select-even-between()`
  * `select-even()`
  * `select-except-first-last()`
  * `select-except-only-child()`
  * `select-except()`
  * `select-first-last()`
  * `select-first-of-type()`
  * `select-first-out-of()`
  * `select-first()`
  * `select-last-of-type()`
  * `select-last-out-of()`
  * `select-last()`
  * `select-middle()`
  * `select-nth-between()`
  * `select-nth-both-sides()`
  * `select-nth-from()`
  * `select-nth()`
  * `select-odd-between()`
  * `select-odd()`
  * `select-only-child()`
  * `select-owl()`
  * `selector-combine()`
  * `set()`
  * `shade()`
  * `sides-bottom()`
  * `sides-left()`
  * `sides-right()`
  * `sides-top()`
  * `sides-x()`
  * `sides-y()`
  * `sides()`
  * `srgb()`
  * `str-ends-with()`
  * `str-replace()`
  * `str-split()`
  * `str-starts-with()`
  * `str-to-num()`
  * `str-trim-end()`
  * `str-trim-start()`
  * `str-trim()`
  * `strip-unit()`
  * `svg-base64()`
  * `svg-url()`
  * `tetrad()`
  * `tint()`
  * `triad()`
  * `unique-id-by-value()`
  * `xyz()`
</details>

<!-- end automated part -->

## USAGE EXAMPLE

You can `@use` each component on its own without loading the entire (heavy) library

```scss
@use "sass-styler/utility/flex-grid" as *;

div.columns {
    @include flex-grid(1 of 3, 20px);
}
```

Or you `@use` load a whole module to use all of its components

```scss
@use "sass-styler/theme" as *;

@include reset();
@include normalize();

.card {
    @include elevation(3);
}

```
