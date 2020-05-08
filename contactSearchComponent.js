import { LightningElement,track, wire} from 'lwc';
import getContactList from '@salesforce/apex/contactSearchClass.getContactList';
const DELAY = 300;
export default class ContactSearchComponent extends LightningElement {
    @track contact = [];
    // eslint-disable-next-line no-undef
    debugger;   
    queryTerm ='';
    // eslint-disable-next-line no-undef
    debugger; 
    @wire(getContactList,{queryTerm: '$queryTerm'})
    handleGetContactList({error,data}){
        window.console.log("Something went wrong",{error},{data});
        // eslint-disable-next-line no-undef
        debugger;
        if(typeof data!=='undefined'){
            for(let i=0;i<data.length;i++){
                if (data.hasOwnProperty(i)) { // Filtering the data in the loop
                    this.contact.push({value:data[i], key:i});
                    // eslint-disable-next-line no-undef
                    debugger; 
                }
            }
        }
        else if(typeof data==='undefined'){
            this.contact.push({value:"", key:""});
        }
    };      
    handleKeyChange(event){
        window.clearTimeout(this.delayTimeout);
        this.contact = [];
        const queryTerm = event.target.value;
        // eslint-disable-next-line no-undef
        debugger;        
        this.delayTimeout = setTimeout(() => {
        this.queryTerm = queryTerm;
        }, DELAY);
    }
}
