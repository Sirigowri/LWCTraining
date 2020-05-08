public with sharing class contactSearchClass {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String queryTerm) {
        String key = '%'+ queryTerm +'%';
        System.debug('key'+key);
        List<Contact> queryContact = [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Name LIKE :key WITH SECURITY_ENFORCED LIMIT 10];
        System.debug('queryContact'+queryContact);
        return queryContact;
    }
}

