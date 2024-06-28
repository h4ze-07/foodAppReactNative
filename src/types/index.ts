import { ImageSourcePropType } from "react-native"

type PureFuncWithoutParams = () => void;

export type TCsutomButtonProps = {
    text: string,
    containerStyles: string,
    textStyles: string,
    onClick: () => void,
}

export type TexlLinkProps = Partial<TCsutomButtonProps>;

export type TOnboardingProps = {
    id: string,
    heading: string,
    description: string,
    image: ImageSourcePropType,    
}

export type TOnboardingItemProps = {
    item: TOnboardingProps, 
    width: number, 
    currentScreen: number, 
    handleSkipClick: PureFuncWithoutParams,
    handleNextClick: PureFuncWithoutParams,
    handleStart: PureFuncWithoutParams,
}


