import { TypedArrayConstructor, TypedArray, NestedArrayData } from "../../src/nestedArray/types";
import { createNestedArray, sliceNestedArray, rangeTypedArray } from "../../src/nestedArray";
import { Slice } from "../../src/core/types";
import { slice } from "../../src/core/slice";
import { flattenNestedArray } from '../../src/nestedArray/index';

describe("NestedArray slicing", () => {
    interface TestCase {
        name: string;
        shape: number[];
        constr: TypedArrayConstructor<TypedArray>;
    }


    const testCases: TestCase[] = [
        {
            name: "1d_3",
            shape: [3],
            constr: Int32Array,
        },
        {
            name: "3d",
            shape: [3, 5, 7],
            constr: Int32Array,
        },
        {
            name: "5d",
            shape: [3, 5, 7, 5, 3],
            constr: Int32Array,
        },
        {
            name: "2d_f32",
            shape: [3, 5],
            constr: Float32Array,
        }
    ];


    test.each(testCases)(`%p`, (t: TestCase) => {
        const data = rangeTypedArray(t.shape, t.constr);
        const nestedArray = createNestedArray(data.buffer, t.constr, t.shape);

        const flat = flattenNestedArray(nestedArray, t.shape);
        expect(flat).toEqual(data);
    });

});