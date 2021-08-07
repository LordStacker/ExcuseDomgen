let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

const randomDOM = () => {
        for(const index of pronoun){
            for(const index2 of adj){
                for(const index3 of noun){
                    console.log(index+index2+index3+".com");
                }
            }
        }
}
randomDOM();