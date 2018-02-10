package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Production;
import com.example.demo.repo.ProductionRepo;

@RestController
@Transactional
public class QueryResults {

	@Autowired
	ProductionRepo  productionrepo;
	@GetMapping("test")
	public List<Object> loadRes(){
		//System.out.println("Crop Year : "+productionrepo.findCropYears().toString());
	return productionrepo.getResultByStateNameDistrictNameCrop("Andaman and Nicobar Islands","NICOBARS","Kharif");
	}
	@GetMapping("cropYears")
	public List<Integer> loadCropYears(){
		return productionrepo.findCropYears();
	}
	@GetMapping("Districts")
	public List<String> loadDistricts(){
		return productionrepo.findDistricts();
	}
	@GetMapping("States")
	public List<String> loadStates(){
		return productionrepo.findStates();
	}
	@GetMapping("Crops")
	public List<String> loadCrops(){
		return productionrepo.findCrops();
	}
	@GetMapping("Seasons")
	public List<String> loadSeasons(){
		return productionrepo.findSeasons();
	}
	@PostMapping("search")
	public List loadResults(@RequestBody Production production){
		List resultList=new ArrayList();
		System.out.println("Query param -- >"+production.toString()); 
	   //first filter
	   if(production.getStateName()!=null 
			   &&production.getDistrictName()!=null 
			   &&production.getCrop()!=null ){
		System.out.println("condition 1");   
		resultList=productionrepo.getResultByStateNameDistrictNameCrop(production.getStateName(), production.getDistrictName(), production.getCrop());
		
	   }
	 //second filter
	   else if(production.getStateName()!=null 
			   &&production.getDistrictName()!=null 
			   &&production.getCrop()!=null
			   &&production.getSeason()!=null){
		   System.out.println("condition 2");
		   resultList=productionrepo.getResultByStateNameDistrictNameCropSeason(production.getStateName(), production.getDistrictName(), production.getCrop(), production.getSeason());
		   
	   }
	   else if(production.getStateName()!=null 
			   &&production.getDistrictName()!=null 
			   &&production.getCrop()!=null 
			   && production.getCropYearFrom() !=null 
			   && production.getCropYearTo()!=null){
		   System.out.println("condition 3");   
		   resultList=productionrepo.getResultByStateNameDistrictNameCropAndCropYear(production.getStateName(), production.getDistrictName(), production.getCrop(),production.getCropYearFrom(), production.getCropYearTo());
	   }
	   else if(production.getStateName()!=null 
			   &&production.getDistrictName()!=null 
			   &&production.getCrop()==null 
			   && production.getCropYearFrom() !=null 
			   && production.getCropYearTo()!=null
			   && production.getSeason()==null){
		   System.out.println("condition 4");   
		   resultList=productionrepo.getResultByStateNameDistrictNameCropYear(production.getStateName(), production.getDistrictName(),production.getCropYearFrom(), production.getCropYearTo());
	   }
	   else if(production.getStateName()!=null 
			   &&production.getDistrictName()!=null
			   &&production.getCrop()==null 
			   && production.getCropYearFrom() ==null 
			   && production.getCropYearTo()==null
			   && production.getSeason()==null
			   ){
		   System.out.println("condition 5"); 
		   resultList=productionrepo.getResultByStateNameDistrictName(production.getStateName(), production.getDistrictName());
		   
	   }
	   
	   else if(production.getStateName()!=null 
			   &&production.getDistrictName()!=null
			   &&production.getCrop()!=null 
			   && production.getCropYearFrom() ==null 
			   && production.getCropYearTo()==null
			   && production.getSeason()==null
			   ){
		   System.out.println("condition 6"); 
		   resultList=productionrepo.getResultByStateNameDistrictNameCrop(production.getStateName(), production.getDistrictName(), production.getCrop());
		   
	   }
	   else if(production.getStateName()!=null 
			   &&production.getDistrictName()!=null
			   &&production.getCrop()==null 
			   && production.getCropYearFrom() ==null 
			   && production.getCropYearTo()==null
			   && production.getSeason()!=null
			   ){
		   System.out.println("condition 7"); 
		   resultList=productionrepo.getResultByStateNameDistrictNameSeason(production.getStateName(), production.getDistrictName(), production.getSeason());
		   
	   }
	   else if(production.getStateName()==null &&production.getDistrictName()==null&&production.getCrop()!=null  && production.getSeason()!=null ){
		   System.out.println("condition 8"); 
		   resultList= productionrepo.getResultByOverall(production.getCrop(),production.getSeason());
	   }
	   
	   else if(production.getStateName()!=null &&production.getDistrictName()!=null&&production.getCrop()==null  && production.getSeason()==null&& production.getCropYearFrom() ==null 
			   && production.getCropYearTo()==null ){
		   System.out.println("condition 9"); 
		   resultList= productionrepo.getResultByStateNameDistrictName(production.getStateName(),production.getDistrictName());
	   }
	   System.out.println("Result -- >"+resultList.toString());   
	    
		return resultList ;
	}
	
	
	
//	@GetMapping("/")
//	public String index() {
//        return "forward:/index.html";
//    }
}
