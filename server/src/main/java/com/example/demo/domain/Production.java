package com.example.demo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Production {
	@Id
	@Column(name = "id", nullable = false, updatable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(name = "state_name")
	String stateName;
	
	@Column(name = "district_name")
	String districtName;
	
	@Column(name = "crop_year")
	Integer cropYear;
	
	@Column(name = "season")
	String season;
	

	@Column(name = "crop")
	String crop;
	
	@Column(name = "area")
	Double area;
	
	@Column(name = "production")
	Double production;
	

	Integer cropYearFrom;
	Integer cropYearTo;

	public Integer getCropYearFrom() {
		return cropYearFrom;
	}

	public void setCropYearFrom(Integer cropYearFrom) {
		this.cropYearFrom = cropYearFrom;
	}

	public Integer getCropYearTo() {
		return cropYearTo;
	}

	public void setCropYearTo(Integer cropYearTo) {
		this.cropYearTo = cropYearTo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public String getDistrictName() {
		return districtName;
	}

	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}



	public Integer getCropYear() {
		return cropYear;
	}

	public void setCropYear(Integer cropYear) {
		this.cropYear = cropYear;
	}


	public String getSeason() {
		return season;
	}

	public void setSeason(String season) {
		this.season = season;
	}

	public String getCrop() {
		return crop;
	}

	public void setCrop(String crop) {
		this.crop = crop;
	}

	public Double getArea() {
		return area;
	}

	public void setArea(Double area) {
		this.area = area;
	}

	public Double getProduction() {
		return production;
	}

	public void setProduction(Double production) {
		this.production = production;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return stateName +" _"+districtName+"_"+crop +"_"+cropYearFrom+"_"+cropYearTo+"_"+season;
	}

}
