
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/
enum Secs {Seconds}

/**
 * Wait blocks
 */
//% weight=100 color=#8B4513 icon="\uf017"
namespace Wait {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="Wait for %num seconds"
    export function Wait(num: number): void {
        control.waitMicros((1000 * num) * 1000)

    }


}
