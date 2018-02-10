package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.domain.Production;

public interface ProductionRepo extends JpaRepository<Production, Long>{

	@Query("select distinct(cropYear) from Production order by cropYear")
	List<Integer> findCropYears();
	@Query("select distinct(stateName) from Production order by stateName")
	List<String> findStates();
	@Query("select distinct(districtName) from Production order by districtName")
	List<String> findDistricts();
	@Query("select distinct(crop) from Production order by crop")
	List<String> findCrops();
	@Query("select distinct(season) from Production order by season")
	List<String> findSeasons();
	
	@Query(value = "select stateName,districtName,cropYear,crop,area,production,Max(production),avg(production) from Production"
			+ " where stateName like %:state% and districtName like %:district% "
			+ " group by crop,districtName,stateName,cropYear,production,area ")
	List<Object> getResultByStateNameDistrictName(@Param("state") String state,@Param("district") String district);
	
	@Query(value = "select stateName,districtName,cropYear,crop,area,production,Max(production),avg(production) from Production"
			+ " where crop like %:crop% and  season like %:season%"
			+ " group by crop,districtName,stateName,cropYear,production,area ")
	List<Object> getResultByOverall(@Param("crop") String crop,@Param("season") String season);
	
	@Query(value = "select stateName,districtName,cropYear,crop,area,production,Max(production),avg(production) from Production"
			+ " where stateName like %:state% and districtName like %:district% and crop like %:crop%"
			+ " group by crop,districtName,stateName,cropYear,production,area ")
	List<Object> getResultByStateNameDistrictNameCrop(@Param("state") String state,@Param("district") String district,@Param("crop") String crop);
	
	@Query(value = "select stateName,districtName,cropYear,crop,area,production,Max(production),avg(production) from Production"
			+ " where stateName like %:state% and districtName like %:district% and crop like %:crop% and season like %:season%"
			+ " group by crop,districtName,stateName,cropYear,production,area ")
	List<Object> getResultByStateNameDistrictNameCropSeason(@Param("state") String state,@Param("district") String district,@Param("crop") String crop,@Param("season") String season);
	
	@Query(value = "select stateName,districtName,cropYear,crop,area,production,Max(production),avg(production) from Production"
			+ " where stateName like %:state% and districtName like %:district% and  season like %:season%"
			+ " group by crop,districtName,stateName,cropYear,production,area ")
	List<Object> getResultByStateNameDistrictNameSeason(@Param("state") String state,@Param("district") String district,@Param("season") String season);
	
	@Query(value = "select stateName,districtName,cropYear,crop,area,production,Max(production),avg(production) from Production"
			+ " where stateName like %:state% and districtName like %:district% and crop like %:crop%"
			+" and cropYear between :cropFrom and :cropTo "
			+ " group by crop,districtName,stateName,cropYear,production,area ")
	List<Object> getResultByStateNameDistrictNameCropAndCropYear(
			@Param("state") String state,
			@Param("district") String district,
			@Param("crop") String crop,
			@Param("cropFrom") Integer cropFrom,
			@Param("cropTo") Integer cropTo);
	
	@Query(value = "select stateName,districtName,cropYear,crop,area,production,Max(production),avg(production) from Production"
			+ " where stateName like %:state% and districtName like %:district% "
			+" and cropYear between :cropFrom and :cropTo "
			+ " group by crop,districtName,stateName,cropYear,production,area ")
	List<Object> getResultByStateNameDistrictNameCropYear(
			@Param("state") String state,
			@Param("district") String district,
			@Param("cropFrom") Integer cropFrom,
			@Param("cropTo") Integer cropTo);
	
}
