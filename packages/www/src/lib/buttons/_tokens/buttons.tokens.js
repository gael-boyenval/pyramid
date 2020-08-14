import core from '../../coreTokens';

export const button = {
    size : {
        sm: {
            height: core.unit.300,
            fs: core.fs.200
        },
        med: {
            height: core.unit.300,
            fs: core.fs.200
        },
        lg: {
            height: core.unit.300,
            fs: core.fs.200
        }
    },
    theme: {
        primary: {
            bg : core.color.primary.200,
            color : core.color.primary.200,
        }
    }
}

/*
// should return 
// within core
$core-unit-300 : $core-unit-300;
$core-fs-200 : $core-unit-300;

// within button
$button-size-s-height : $core-unit-300;

and 

$button : (
    size : (
        sm : (
            ...
        )
    )
);
*/