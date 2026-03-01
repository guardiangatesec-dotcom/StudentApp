using { stu.db as model } from '../db/data-model';

Service StudentDataAPIService{
    entity StudentSet as projection on model.Students;
}